---
layout: post
title: "Writing meaningful GitHub issues results in better commit messages"
categories: journal
---

I have made a concerted effort to write better GitHub issues of late. Surprisingly, this has resulted in more meaningful commit messages in Git.

### Describe what needs fixing (or doing)

Whether you are reporting a bug or adding an issue for a new feature, put the effort in to properly describe it.

Because of how easy it is to add issues to [GitHub](https://github.com/), you can be forgiven for leaving out a lot of
detail. Instead of using issues as a personal to-do list, consider other users who may view an issue months later. A
benefit of this is that as users join a repository, they can get stuck into the backlog immediately.

Provide a detailed issue title and optional description with all the additional information. This extra information
could be references to other issues, commits or external resources.

#### Examples of issue titles:

- _Cater for dynamic no results message in table data_
- _Update the manifest start URL_
- _Display affiliate ID as a read only field within a team_

The issue descriptions provides, for example, the start URL to update that manifest with. Combined with labels, these
issues become powerful stories to help progress your code base. 

Whilst these issues may seem arbitrary without any context, they made perfect sense in the recent project I have been
working on!

### Surprise! Your GitHub commit messages improve

By using the issue title as the commit message, you'll start to see the  progression of your bug fixes or features.
This means you can read what went into a specific commit, without even needing to look at the code to figure it out.

#### Example of a commit message:

- _Catered for dynamic no results message in table data [Closes #123]_
 
(I use square brackets to separate keywords and issue number(s); they are not necessary)

By using keywords, GitHub will (in this case) close the issue and create a reference to the commit in your issue.

Now that I have been writing better GitHub issues, I can drop the "tidy up" or "WIP" commit messages I have been guilty
of in the past.

All I do is copy and paste the issue title, change it to the past tense and reference the issue.

### Releases with GitFlow

Having used [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) for a while now, I find it is often
tedious when deciding what goes into your release notes. Having better commit messages makes it easy to summarise what
has gone into a release.

Needless to say not all issues are worded as we'd like. And sometimes time doesn't allow for perfect commit messages.
But having a standard to aim for means we can try and do things the right way, most of the time!

---

#### Further reading

- [Closing issues using keywords](https://help.github.com/articles/closing-issues-using-keywords/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
