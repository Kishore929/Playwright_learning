  /*  reporter: 'html', list, dot, line,
     reporter: [['json',{outputFile:'results.json'}]]
     reporter: [['junit',{outputFile:'results.xml'}]]
  
  // install allure module
       npm i -D @playwright/test allure-playwright

  // install 
     npm install -g allure-commandline --save-dev

  // In config.js file we can specify like this
      reporter: [['allure-playwright',{outputFile:'allure-results'}]]

  //In the terminal we can run like this
     npx playwright test (specify test  file) --reporter allure-playwright

  // generate allure report
      allure generate allure-results -o my-allure-report --clean

  //open allure report  // once execute below command 
  //the allure reports are opened like pie charts like circles, graphs, Timeline with highlighted colors
       allure open my-allure-report



  // Retries

    1) passed       -No retries
    2) failed -Retry  -failed
    3) Failed -Retry  -passed     --Fleky tests
    
    // in config file we can specify like
      retries:1,
      
   */