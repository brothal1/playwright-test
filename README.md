## Steps to use Playwright MCP to generate Playwright Tests (VSCode)
### Step 1:
Install the "Playwright Test for VSCode" Extension from the Extensiosn tab
### Step 2:
Install the MCP Server called "playwright" from the mcp-servers section of the Extensions tab
### Step 3: 
After installing the playwright MCP server in step 2, click on the settings wheel and select "Show Connfiguration"
### Step 4:
Copy and paste that file into your project and name it "mcp.json". Keep track of where it is as you will need the path later
### Step 5:
Copy and paste the webtestcontext.txt file into your project (Provided below)
### Step 6: 
Open a terminal and run the command:  
`npx @playwright/mcp@latest --config {path to mcp.json file}`
### Step 7:
Open a new terminal
### Step 8:
Open a new copilot chat and ensure that it is set on "Agent" mode
### Step 9:
You can now begin using Playwright MCP to automate the generation of playwright tests. Simply drag in the webtestcontext.txt file and begin typing out a series of steps for the test to execute. An example prompt would be:  
1. Navigate to the log in page
2. Log in
3. Click on create a new transaction
4. Fill out the name box with "Contract Agreement"
5. Fill out the description box with "COntract agreement for Nathan's employment"
6. Take a screenshot and save it  
  
The Playwright MCP will then generate a playwright test file (.js) which can be run with the following commands:  
  
To run all playwright tests:  
`yarn playwright`  
To run a specific playwright test or only the playwright tests within a directory:  
`yarn playwright {file path or folder path}`
