import React from 'react'
import Link from 'gatsby-link'
import Code from '../components/syntax'

const IndexPage = () => (
  <div>
    <h1>Hello Developers! &nbsp;<i className="em em-wave"></i></h1>
    <h3>Let's Submit a Pull Request.</h3>
    <p>Your profile will be visible in the <Link to="/submissions/">Submissions </Link>, once your pull request is merged.
    section of this page.  
    </p>
    
    <h3>Step 1</h3>
    <p>
      Visit <a target="_blank" rel="noopener" href="https://github.com/bjungbogati/tryGit">tryGit repository </a> of this project and fork the project to your account. Click on the fork button on the top-right corner of the repository page to do it. After that, GitHub will redirect to the forked copy in your account.
      <Code code="https://github.com/bjungbogati/tryGit"/>
    </p>
    <h3>Step 2</h3>
    <p>
      Clone the forked repository in your device. Click on the button <b>"Clone or download"</b> and copy the URL of your repository. 
      Open the <a target="_blank" rel="nofollow noopener" href="https://git-scm.com/download/win">Git-bash</a> (terminal with Ctrl+Alt+T) navigate to your desired directory and type the following command. Replace the link with the clone URL of your repository and hit Enter.
      <Code code="git clone https://github.com/MY_USERNAME/tryGit.git"/>
    </p>
    <h3>Step 3</h3>
    <p>
      Let's start working on the changes required now! First cd into the cloned folder by typing the following command.
      <Code code="cd tryGit"/>
      Now, Before jumping in to the code, make sure you're working on a different branch and not in master. To create a new branch, 
      from the terminal inside your current project directory type the following command.
      <Code code="git branch MY_USERNAME-profile"/>

      Replace the <b>MY_USERNAME</b> with your GitHub username (or any suitable name). 
<br/><br/> 

Eg: <b>git branch bjungbogati-profile</b>. 

<br/><br/>
 Then, need to checkout (or switch) from master to new branch.
      Execute the following command on your terminal.
      <Code code="git checkout MY_BRANCH_NAME"/>
    </p>
    <h3>Step 4</h3>
    <p>
      Now, go to <i className="em em-file_folder"></i><b>src/profiles/</b>. and create a new <b>.md</b> file with your username as the filename with <b>.md</b> extension.<br/><br/>
      <b>Eg: bjungbogati.md </b><br/><br/>
      Open this file in your favourite editor and fill the details as below in the frontmatter of the markdown file.<br/>
      <br/>
      <i className="em em-page_facing_up"></i><i>MY_USER_NAME.md</i>
      <p className="code">
      ---<br/>
      username: YOUR_USER_NAME<br/>
      fullname: YOUR_FULL_NAME<br/>
      ---
      </p>
      <p>
        Note: Don't delete hypens "---" while are part of code. 
      </p>
    </p>
    <h3>Step 5</h3>
    <p>
      Commit the changes with a suitable commit message.<i className="em em-white_check_mark"></i> First we need to stage all the changes we made. Open the terminal inside the project directory and execute following commands.
      <Code code="git add -A"/>
      The above command stages all the changes, now lets commit it with a suitable message.
      <Code code='git commit -m "MY_COMMIT_MESSAGE"'/>
    </p>

    <h3>Step 6</h3>
    <p>
      Now push changes to your forked repository.
      <Code code="git push -u origin MY_BRANCH_NAME"/>
    </p>
    <h3>Step 7</h3>
    <p>
      After pushing your code, you'll be able to see an option saying <b>"New Pull Request"</b> in the <a target="_blank" rel="nofollow noopener" href="https://github.com/bjungbogati/tryGIt"> original repository on GitHub</a>. 
 
      Make sure to choose <b>MY_BRANCH_NAME</b>, fill the commit message and comment click on submit pull request. <br/> 
<br />
Wait for a reviewer to merge your pull request and your profile will be visible in the submissions tab. 
    </p>
  </div>
)

export default IndexPage
