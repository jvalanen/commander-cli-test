*** Settings ***
Library  Process
Library  OperatingSystem
Library  ./get_user_home.py
Library  ./run_dcli_command.py

*** Test Cases ***
Test CLI Output --version
    ${output}=  Run Dcli Command  --version
    Should Be Equal  ${output.strip()}  0.0.1

Test CLI Output --help
    ${output}=  Run Dcli Command  --help
    ${expected_output}=  Get File  ${SUITE_SOURCE}/../help_output.txt
    Should Be Equal  ${output.strip()}  ${expected_output.strip()}

Test File Creation
    ${config_file_path}=  Join With User Home  .dcli
    ${file_content}=  Get File  ${config_file_path}
    Should Contain  ${file_content}  focus
