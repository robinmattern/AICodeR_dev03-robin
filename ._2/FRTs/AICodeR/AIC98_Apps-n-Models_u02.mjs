   import   FRT          from './AIC90_FileFns.mjs'
   import   dotenv       from 'dotenv'; 
            dotenv.config( FRT.path( __basedir, '.env' ) )

//     var  mEnvs       =   Object.entries( process.env ).filter( mEnv => mEnv[0].slice(0,4) == 'FRT_' )
//          console.log( "${__basedir}/.env:       ", `${__basedir}/.env` ); 
//          console.log( "process.env['FRT_APP']:  ", process.env['FRT_APP'  ] ); 
//          console.log( "process.env['FRT_MODEL']:", process.env['FRT_MODEL'] ); 
//          console.log( "mEvs:" ); console.dir( mEnvs )
//          process.exit() 
 
       var  Apps =                                                                      // .(40711.01.3 RAM Add Apps table)
             [ [ ' 1.', 'c35', 'c35_calendar1-app        ' ] //
             , [ ' 2.', 'c36', 'c36_hawaii-contracts-app ' ] //
             , [ ' 3.', 'c37', 'c37_aicoder-sessions-app ' ] //
             , [ ' 4.', 'c38', 'c38_login-app            ' ] //
             , [ ' 5.', 'c42', 'c42_whatever-app         ' ] //
             , [ ' 6.', 'c43', 'c43_chrome-extension-app ' ] //
             , [ ' 7.', 'c44', 'c44_a-dancers-dream-app  ' ] //
             , [ ' 8.', 's35', 's35_calendar-app         ' ] //
               ]
// ----------------------------------------------------------------------------------

       var  Models2 =
             [ [ ' 1.', 'gp4oopw', 'GPT-4o_OpenAI-web       ' ] // ##    markdown, text, json (playground)
             , [ ' 2.', 'gp4oopu', 'GPT-4o_OpenAI-curl      ' ] // ##    json text
             , [ ' 3.', 'gp4oopn', 'GPT-4o_OpenAI-node      ' ] //       json object
             , [ ' 3.', 'gp4oopm', 'GPT-4o_OpenAI-maxi      ' ] //       json object             // .(40702.06.1 RAM New Models)
             , [ ' 4.', 'gp4oopf', 'GPT-4o_OpenAI-fetch     ' ] //       json object
             , [ ' 5.', 'gp4oopc', 'GPT-4o_OpenAI-cont      ' ] //       markdown /share

             , [ ' 6.', 'qw7bolu', 'Qwen2-7b_Ollama-curl    ' ]
             , [ ' 7.', 'qw7boln', 'Qwen2-7b_Ollama-node    ' ]
             , [ ' 8.', 'qw7bolc', 'Qwen2-7b_Ollama-cont    ' ] // ##
             , [ ' 9.', 'cg2bolu', 'CodeGemma-2b_Ollama-curl' ]
             , [ '10.', 'cg2boln', 'CodeGemma-7b_Ollama-node' ]
             , [ '11.', 'cg2bolc', 'CodeGemma-7b_Ollama-cont' ]
             , [ '12.', 'c2q5lmn', 'Claude2-Q5_LMStudio-node' ]
             , [ '13.', 'c2q3lmn', 'Claude2-Q3_LMStudio-node' ]
             , [ '13.', 'c3q3lmn', 'Claude3-Q3_LMStudio-node' ]
             , [ '14.', 'c35sanm', 'Claude-35s_Anthropic-maxi']                                  // .(40702.06.2)
             , [ '15.', 'c35sanu', 'Claude-35s_Anthropic-curl']                                  // .(40704.01.1)
             , [ '16.', 'c35sann', 'Claude-35s_Anthropic-node']                                  // .(40704.01.2)
//           , [ '17.', 'c35sanw', 'Claude-35s_Anthropic-web' ]                                  // .(40704.01.3)
             , [ '17.', 'c35sanw', 'Claude3-So_Anthropic-chatgpt' ]
             , [ '18.', 'st20lmn', 'StarCoder2_LMStudio-node' ]
             , [ '19.', 'cllalmn', 'CodeLlama_LMStudio-node ' ]
             , [ '20.', 'gp4ovcp', 'CodeParrot_VSCode-copy  ' ]
             , [ '21.', 'ge15ggw', 'Gemini-15_Google-web    ' ]
             , [ '22.', 'ge15gvw', 'Gemini-15_Vertex-web    ' ]
                ]
// ----------------------------------------------------------------------------------
/*
            console.log( ` 'c37','...':`, getDocsPath( getApp( 2, 'c37' )[2], 'Claude3-So_Anthropic-chatgpt' ) )
            console.log( "  c35:       ", getDocsPath( getApp( 2, 'c35' )[2] ) )
            console.log( "  c88:       ", getDocsPath( getApp( 2, 'c88' )[2] ) )
            console.log( "  c35,  sdf :", getDocsPath( getApp( 2, 'c35' )[2], getModel( 2, 'sdf' ) ) )
            console.log( `  c35, 'sdf':`, getDocsPath( getApp( 2, 'c35' )[2], 'sdf' ) )
            console.log( ` 'sdf'      :`, getDocsPath( 'sdf' ) )
            console.log( ` 'appx','aa':`, getDocsPath( 'appx', 'aa' ) )
            console.log( ` 'appx',sdf :`, getDocsPath( 'appx', getModel( 2, 'sdf' )  ) )
            process.exit()
*/
  function  getDocsPath( aAppName, aModel_ ) {                                                       // .(40715.04.4 Add function getDocsPath Beg)
            aAppName       = (aAppName || '').trim()
       var  aModel         = (aModel_  || '').trim()
       var  aDir           =  aModel ? `docs/${aAppName}/${aModel}` : `docs/${aAppName}`
       var  aSessions_Dir  =  FRT.path( __basedir, aDir )
       var  pStat          =  FRT.checkFileSync( aSessions_Dir )
       if (!pStat.isDir   ||  aAppName == '' || (aModel == '' && aModel_ == '')) {
//     var  aErrMsg        =  aAppName && aModel_ != '' ?  `AppName/Model folder, ./${aDir}` : ( aModel_ ? `AppName, ''` : `aModel, ''` )
       var  aErrMsg        =  aAppName && aModel_ != '' ?  `AppName/Model folder, ./${aDir}` : `AppName/Model, ''`
            console.log( `* ${aErrMsg}, does not exist.` )
            process.exit()
//   return `* ${aErrMsg}, does not exist.`
            }
     return aSessions_Dir
            }                                                                                       // .(40715.04.4 End)
// ----------------------------------------------------------------------------------

  function  selectRow( mRows, nFld, aVal ) {  var nOrigin = 0
        if (typeof(nFld) == 'undefined' ||  `${ nFld || '' }` == '') { return mRows }
        if (typeof(nFld) == 'string'    ) { aVal = nFld; nFld  =  2 - (1 - nOrigin) }
        if (typeof(aVal) == 'undefined' ) { return mRows.map( mRow => mRow[ nFld - nOrigin ] ) }
        if ( aVal  == '' ) { return ''}
        if (isNaN(aVal)) { var nVal = 0 } else {var nVal = aVal * 1 }
        if (nFld > mRows[0].length - (1 - nOrigin)) {
            console.log( `\n* Invalid field No ${nFld}. (Origin is now ${nOrigin})`); return '' }
       var  nRow = mRows.findIndex( ( mRow, i ) => { var  aFld  = mRow[ nFld - nOrigin ];
//          console.log(  aFld.slice( 0, aVal.length ), aVal )
    return  nVal ? (mRow[ nFld - nOrigin ] * 1) == nVal : aFld.slice( 0, aVal.length ) == aVal
            } )
    return (nRow != -1) ? mRows[ nRow ] : ''
            }
// ----------------------------------------------------------------------------------

//          console.log( "getApp:", getApp() )
//          console.log( "getApp( 0, 'c35' ):",    getApp( 0, 'c35' )    )  // same as no args
//          console.log( "getApp( 3, 'c35' ):",    getApp( 3, 'c35' )    )  //
//          console.log( "getApp( 2, 'c35' ):",    getApp( 2, 'c35' )    )
//          console.log( "getApp( 2, 'c35' )[2]:", getApp( 2, 'c35' )[2] )
//          console.log( "getApp( 2, 'c35' )[2]:", getApp( 2, 'c35' )[2] || '')
//          console.log( "getApp( 2, 'c88' ):",    getApp( 2, 'c88' )    )  // ''
//          console.log( "getApp( 2, 'c88' )[2]:", getApp( 2, 'c88' )[2] )  // undefined
//          console.log( "getApp( 2, 'c88' )[2]:", getApp( 2, 'c88' )[2] || '' )  // ''
//          process.exit()

   function getModel( nFld, aVal ) { return selectRow( Models2, nFld, aVal ) }
   function getApp(   nFld, aVal ) { return selectRow( Apps,    nFld, aVal ) }          // .(40711.01.1 RAM Added)
/*
//          chkArgs( [] )
//          chkArgs( [''] )
            chkArgs( ['c35'  ] )
//          chkArgs( ['c21'  ] )
            chkArgs( ['a21'  ] )
            chkArgs( ['c99'  ] )
//          chkArgs( [ 1,2,5 ] )
//          chkArgs( [ 1,2,    'c21'] )
            chkArgs( [ 1.2,    'c35'] )
            chkArgs( [ 1.2,5,  'c35', 'dfg'     ] )
            chkArgs( [ 1.2,5,  'c35', 'aaaaaaa' ] )
            chkArgs( ['1.2.5', 'c99', 'c35sann'  ] )
            chkArgs( ['1.2.40711.1304', 'c35', 'c35sann' ] )
*/
       var  bTesting_Args   =  false
       var  bIsNotCalled    =  FRT.isCalled( import.meta.url, process.argv[1]);
        if (bIsNotCalled && bTesting_Args) {
//          setArgs( [ 'c55'        ] )   //  ** App alias not found: 'c55'  (if not in mApps)
//          setArgs( [ 'get', 'c55' ] )   //  ** App alias not found: 'c55'  (if not in mApps)
//          setArgs( [ 'set', 'c55' ] )   //  ** App alias not found: 'c55'  (if not in mApps)
//          setArgs( [ 'c37'        ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
//          setArgs( [ 'get', 'c37' ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
//          setArgs( [ 'set', 'foo'     ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
       var  mParms = setArgs( [ 'set', 'fooey'       ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
            mParms = setArgs( [ 'get', 'app',  'c37' ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
            mParms = setArgs( [ 'get', 'model', ''   ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
            mParms = setArgs( [ 'set', 'gp4oopu'     ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
            mParms = setArgs( [ 'set', 'c35'         ] )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
//          mParms = setArgs(    process.env           )   // nThread: '', nMsg: '',  aTS: '', aApp: 'c37', aMod: ''
            console.log( `nThread: '${mParms[0]}', nMsg: '${mParms[1]}',  aTS: '${mParms[2]}', aApp: '${mParms[3]}', aMod: '${mParms[4]}' ` )

//          setArgs( [ '1.2.40711.1304' ] )
//          setArgs( [ 'c35', ] )
//          setArgs( [ 'set', '1.2.40711.1304', 'c35', 'c35sann' ] )
//          setArgs( [ 'get', '1.2.40711.1304', 'c35' ] )
            process.exit()
           }
// ------------------------------------------------------------------------------

  function  setArgs( mArgs, aGetSet, aQuit ) { 
//     var  bSet  = 0,  bGet = 0, aVar;
            mArgs     =   mArgs.slice(2) 
//      if (aGetSet   == 'get') {  aVar = mArgs[0].slice(0,3).toLowerCase(); mArgs.shift(); bGet = 1 }
       var  mParms    =   chkArgs( mArgs, `${aGetSet}${aQuit}`.match(/quit/) ? 'quit' : '' ) // not 'quit'
//      if (mParms[3] == '' && bGet && aVar == 'app') { mParms[3] = getEnv( 'APP');                return mParms }
//      if (mParms[4] == '' && bGet && aVar == 'mod') { mParms[4] = getEnv( 'Model');              return mParms }
       var  bGet      =  (aGetSet == 'get' && mParms[5] == '') ? 1 : 0
       var  bSet      =  (aGetSet == 'set' && mParms[5] == '') ? 1 : 0
        if (mParms[3] == '' && bGet                 ) { mParms[3] = getEnv( 'APP') || '';             }  //    return mParms }
        if (mParms[4] == '' && bGet                 ) { mParms[4] = getEnv( 'Model') || '';              } // return mParms }
        if (mParms[3] != '' && bSet                 ) {             setEnv( 'APP',    mParms[3] ); } // return mParms }
        if (mParms[4] != '' && bSet                 ) {             setEnv( 'Model',  mParms[4] ); } // return mParms }
//          console.log( `* Invalid app or model alias: '${ mArgs.join( `','` ) }'` )
    return  mParms
            }
// ------------------------------------------------------------------------------

  function  getEnv( aVar, aVal, aPreFix ) {
            aPreFix   =   aPreFix ? `${aPreFix}` : "FRT"
       var  aEnvVar   =`${aPreFix}_${aVar.toUpperCase()}`
       var  aVal      =   aVal ? aVal : process.env[  aEnvVar ] || '' 
        if (aVal == '') { 
            console.log( `\n* The environment variable, '${aEnvVar}', is not defined` )
        } else {
            console.log( `  Got default ${ `${aEnvVar}:`.padEnd(10) } '${aVal}'` )
            }
    return  aVal
            }
// ------------------------------------------------------------------------------
 
  function  setEnv( aVar, aVal, aPreFix ) {
            aPreFix     =   aPreFix ? `${aPreFix}` : "FRT"
       var  aEnvVar     =`${aPreFix}_${ aVar.toUpperCase().replace( `${aPreFix}_`, '' ) }`
            process.env[  aEnvVar ] = aVal
       var  mEnvs       =   Object.entries( process.env ).filter( mEnv => mEnv[0].slice(0,4) == `${aPreFix}_` )
       var  mMyEnvs     =   mEnvs.map( mEnv => `${ mEnv[0].padEnd(12) } = "${mEnv[1]}"` ) 
            console.log( `  Setting default ${aEnvVar} to: '${aVal}' in .env file` )
            console.log( `  mMyEnvs:\n    ${ mMyEnvs.join( "\n    " ) }` )
            FRT.writeFileSync( FRT.path( __basedir, '.env' ), mMyEnvs.join( "\n" ) )
            }
// ------------------------------------------------------------------------------

  function  chkArgs( mArgs, aQuit ) {
//          mArgs     =  mArgs.slice(2) 
     //     mArgs[0]
       var  aSM = '', mParms = ['','','', '', '', ''], rNums = /^[0-9.]+/
        if (rNums.test(mArgs[0])) { aSM +=        mArgs[0]; mArgs.shift() }   // nThread (aka Session): 001
        if (rNums.test(mArgs[0])) { aSM += '.' +  mArgs[0]; mArgs.shift() }   // nMsg: 01
        if (rNums.test(mArgs[0])) { aSM += '.' +  mArgs[0]; mArgs.shift() }   // aDayTS: 40711.1301
        if (aSM != '') {
       var  mSM = aSM.split( '.' )
            mParms[0] = (mSM[0] || '').padStart( 3, '0' )
            mParms[1] = (mSM[1] || '').padStart( 2, '0' )
            mParms[2] =  mSM[3] ? `${mSM[2]}.${mSM[3]}` : (mSM[2] || '')
            }
        if (mArgs[0]  && mArgs[0].length == 3) {
            mParms[3] = /[cs][0-9]{2}/.test( mArgs[0] || '') ?  mArgs[0] : `* Invalid App alias: '${mArgs[0]}'`
            mParms[3] = /^\*/.test(  mParms[3] ) ? mParms[3] : (getApp(   1, mParms[3] )[1] || '').trim()   // origin 0
            mParms[3] =  mParms[3] ? mParms[3] : `* App alias not found: '${mArgs[0]}'`
            mArgs.shift() 
            }
        if (mArgs.length == 2) { var n = 1 } else { var n = 0 }
        if (mArgs[n]  && mArgs[n].length == 7) {
            mParms[4] = /[a-z0-9]{7}/.test(  mArgs[n] || '') ?  mArgs[n] : `* Invalid Model alias: '${mArgs[0]}'`
            mParms[4] = /^\*/.test(  mParms[4] ) ? mParms[4] : (getModel( 1, mParms[4] )[1] || '').trim()   // origin 0
            mParms[4] =  mParms[4] ? mParms[4] : `* Model alias not found: '${mArgs[n]}'`
            mArgs.splice(-1) 
            }
        if (mArgs[0]) {
            n = mArgs.length == 1 ? "" : "s"  
            mParms[5] =  `* Invalid argument${n}: '${ mArgs.join("', '") }'`
            }   
//      if (aQuit == 'quit') {  
        var aCR="\n"; // aQuit = ''
            if (mParms[3].match( /^\*/)) { console.log( aCR + mParms[3] ); aCR = '' } // aQuit = 'quit' }
            if (mParms[4].match( /^\*/)) { console.log( aCR + mParms[4] ); aCR = '' } // aQuit = 'quit' }
            if (mParms[5].match( /^\*/)) { console.log( aCR + mParms[5] ); aCR = '' } // aQuit = 'quit' }
            if (aQuit == 'quit') { process.exit() }
//          }
//          console.log( `nThread: '${mParms[0]}', nMsg: '${mParms[1]}',  aTS: '${mParms[2]}', aApp: '${mParms[3]}', aMod: '${mParms[4]}' ` )
    return  mParms
            }
// ----------------------------------------------------------------------------------

            export default { setArgs, getApp, getModel, selectRow                                    // .(40711.01.2 RAM Add getApp).(40711.04.x RAM Add setArgs)
                          , getDocsPath }                                                            // .(40715.04.5)

// ------------------------------------------------------------------------------

       var  bIsNotCalled    =  FRT.isCalled( import.meta.url, process.argv[1]);
       var  bIsCalled       = `${ process.env['CALL_IT'] }`.match( /true|1/ ) != null;

       var  bRunHere        =  bIsNotCalled && `${ process.env['CALL_IT'] }`.match( /true|1/ ) == null;
//          console.log( `bRun: ${ bRun },  bIsNotCalled :${ bIsNotCalled }, CALL_IT: ${ process.env['CALL_IT'] }` );
//          process.exit()

        if (bRunHere) {

       var  aTable         =  process.argv.length > 2 ? process.argv[2] : ''
       var  aRow           =  process.argv.length > 3 ? process.argv[3] : ''
       var  aItem          =  process.argv.length > 4 ? process.argv[4] : ''

       if ("test1" == "text1") {
       var  aTable         = 'set'
       var  aRow           = 'model'
       var  aItem          = 'c35sann'
            }
//          console.log( `aTable: '${aTable}', aRow: '${aRow}', aItem: '${aItem}'` )
//          process.exit()

        if (aTable == 'set' && aRow.slice(0,3) == 'app' ) {
//     var  aRow           =  process.argv.length > 4 ? process.argv[4] : aRow
       var  aAppName       = (getApp( 1, aItem )[2] || '').trim()
        if (aAppName == "") {
            console.log( `\n* Invalid app: '${aItem}'` )
            process.exit()
            }
//          console.log( `\n  Setting app to: '${aAppName}'` )
//          process.env[     "FRT_APP"] = aAppName
                              setEnv( "App", aAppName )
            process.exit()
            }

        if (aTable == 'set' && aRow.slice(0,3) == 'mod' ) {
//     var  aRow           =  process.argv.length > 4 ? process.argv[4] : aRow
       var  aModel         = (getModel( 1, aItem )[2] || '').trim()
        if (aModel == "") {
            console.log( `\n* Invalid model: '${aItem}'` )
            process.exit()
            }
//          console.log( `\n  Setting model to: ${aItem}  ${aModel}' ` )
//          process.env[     "FRT_MODEL"] = aModel
                              setEnv( "Model",  aModel )
            process.exit()
            }

       if ("test2" == "text2") {
       var  aTable         = 'apps'
       var  aTable         = 'models'
       var  aRow           = 'c35sann'
            }

//     var  aRow           = '' // 'gp4oopm'
//     var  aRow           =  process.argv.length > 3 ? process.argv[3] : ''

//          console.log(   `  aTable: ${aTable}, aRow: '${aRow}'` )
       var  xTable         = (aTable.slice(0,3) == 'mod') ? getModel : getApp
//          console.log(      getModel( aRow ).map( m => '  ' + m.join( '  ' )).join( '\n' ) );
       var  mRows          =  aRow ? [ xTable( aRow ) || [ `* ${aTable.slice(0,-1)} not found: '${aRow}'` ] ] : xTable( aRow );
//          console.dir(      mRows, { depth: 9} )
            console.log("")
            console.log(      mRows.map( m => '  ' + m.join( '  ' )).join( '\n' ) );
            }
