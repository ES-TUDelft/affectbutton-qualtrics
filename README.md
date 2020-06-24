# Using the AffectButton in Qualtrics Surveys

---

The affect button is used to collect users feedback via reporting their emotional state. It is based on the work by [Broekens et al.](http://joostbroekens.com).

In the following, we provide a step-by-step guide for using the affect button in a Qualtrics survey. 
Note that in this guide we're using the affect template as a starting point for a new survey.

## I. Create a Qualtrics Survey using the AffectButton Template

  * Download the file: **AffectButtonV2_Template.qsf**
  
  * Open [Qualtrics.com](https://qualtrics.com) and login to your account (or create a new one)
  
  * Go to the **Projects** page
  
  <div align="center">
   <img src="pics/qprojects.png" width="500px" />
  </div>
  
  * Click on **Create New Project**
  
  * Click on **Survey**
  
  <div align="center">
   <img src="pics/qnewsurvey.png" width="500px" />
  </div>
  
  * Select **From a File** then click on **Choose file** and locate the *AffectButtonV2_Template.qsf* file you downloaded in step 1
  
  <div align="center">
   <img src="pics/qchoosefile.png" width="500px" />
  </div>
  
  * Click on **GetStarted**
  
  <div align="center">
   <img src="pics/qgetstarted.png" width="500px" />
  </div>
  
  * A new project based on the AffectButton template will be created (you can change the name to your liking)
  
  <div align="center">
   <img src="pics/qaffectsurvey.png" width="500px" />
  </div>
  
  * Click on **Preview** to check/test the AffectButton

  * The template provides you with one affect button and its corresponding data (Pleasure, Arousal and Dominance).
  
  <div align="center">
   <img src="pics/qaffectpreview.png" width="500px" />
  </div>
  
---

## II. Survey Design

After testing the affect button (Step I), you can now add new blocks/questions to the survey. 

In case you need **more than one AffectButton** in a survey, you need to do the following:

  * a. Select the question **"QAffectButton**
  
  * b. Click on **Copy Question**
  
  * c. Move the new AffectButton (i.e., question) to a *new block* (only one affect button is allowed per block)
  
  * d. Click on the **JavaScript (JS) icon** of the new AffectButton to open the javascript editor
  
  * e. Set the variables for Pleasure, Arousal and Dominance by appending a number to them (e.g., 1), then save your changes
  
  * f. Select **Survey Flow**
  
  * g. Add 3 **new embedded data** with names matching the one from *Step e* and save your changes
  
  * h. Preview your survey and submit a copy to check that the data is collected as expected (i.e., the AffectButton values are being stored in the Reports)
  
  
---

## III. Adding the AffectButton to an existing survey

This option requires modifying your survey's header scripts and CSS (to match the AffectButton template), which we will not cover here. You can contact us for more details.

---

## VI. Citation

Please cite Broekens et al. when you use the AffectButton in your studies:

    @article{Broekens2013,
      author = "Joost Broekens and Willem-Paul Brinkman",
      title = "AffectButton: A method for reliable and valid affective self-report",
      journal = "International Journal of Human-Computer Studies",
      volume = "71",
      number = "6",
      pages = "641 - 667",
      year = "2013",
      issn = "1071-5819",
      doi = "https://doi.org/10.1016/j.ijhcs.2013.02.003",
      url = "http://www.sciencedirect.com/science/article/pii/S1071581913000220"
    }
