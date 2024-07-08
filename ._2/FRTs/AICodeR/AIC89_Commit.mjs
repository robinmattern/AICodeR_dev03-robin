import { spawn } from 'child_process';
import   FRT     from './AIC90_FileFns.mjs'


// var aMsg = await getLastCommitMessage( )
// var aNo = await getNextCommitNo( ); console.log(aNo)
  
async function getNextCommitNo( ) {
   var aMsg = await getLastCommitMessage( )
   var aNo  = aMsg.slice(1,9)
   var aTS  = FRT._TS
   if (aNo.slice(0,5) != aTS.slice(0,5)) { 
       aNo  = `${aTS.slice(0,5)}.01`
   } else {
       aNo =  `${aNo.slice(0,5)}.${ `${aNo.slice(-2) + 1}`.padStart(2,'0') }`        
       }
       return 'c' + aNo
      } // eof getNextCommitNo
// -------------------------------------------------------------


async function getLastCommitMessage( ) {
  var aMessage = ''
  try {
    // Get the last commit message
    const logProcess = spawn('git', ['log', '-1', '--pretty=%B']); // Get message only

    let commitMessage = '';
    logProcess.stdout.on('data', (data) => {
      commitMessage += data.toString();
    });

    logProcess.stderr.on('data', (data) => {
      console.error('* Error getting last commit message:', data.toString());
    });

    await new Promise((resolve) => logProcess.on('close', resolve));

    if (commitMessage) {
      aMessage = commitMessage.trim();
      console.log('  Last cmessage:', aMessage);
    } else {
      console.log('* No commits found in the repository.');
    }
  } catch (error) {
    console.error('* Error:', error);
  }    
  return aMessage
} // eof  

async function doCommitAll( aMsg ) {
  try {
    // Stage all changed files (assuming you want to commit all)
    const addProcess = spawn('git', ['add', '.']);

    addProcess.stdout.on('data', (data) => {
      console.log(data.toString()); // Optional: Print output from `git add`
    });

    addProcess.stderr.on('data', (data) => {
      console.error('Error staging files:', data.toString());
    });

    await new Promise((resolve) => addProcess.on('close', resolve));

    // Commit staged changes
    const commitProcess = spawn('git', ['commit', '-m', '"Commit message (replace with your desired message)"']);

    commitProcess.stdout.on('data', (data) => {
      console.log(data.toString()); // Optional: Print output from `git commit`
    });

    commitProcess.stderr.on('data', (data) => {
      console.error('Error committing changes:', data.toString());
    });

    await new Promise((resolve) => commitProcess.on('close', resolve));

    console.log('Commit successful.');
  } catch (error) {
    console.error('Error:', error);
  }
}

export { getNextCommitNo, getLastCommitMessage, doCommitAll };
