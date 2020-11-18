Hi Future Nifemi anyone else taking a look at this code
This is to guide you on adding articles

I used [gatsby mdx](https://www.gatsbyjs.com/docs/mdx/) to enable me to easily write articles without repetition
I took advantage of [customize component](https://www.gatsbyjs.com/docs/mdx/customizing-components/)
 functionality to help replace the default components with component I had created.
 I replaced the following components with the following things:
 
 - h1: (#) ArticleHeader - Typical Item header   
 - h2: (##) ArticleTextSmall - Article text but with reduced margin at the bottom   
 - h3: (###) ArticleImageFull - Images that should expand to full width of container
 - h4: (####) ArticleImageNormal - Images that should not be stretched
 - p: () ArticleText - Normal article text
 - ul: (-) ArticleList - A list with some custom styling
 - li: (Child of -) ArticleListItem - A list item with the font styling needed
 
 
 I also used page query for accessing gatsby image in the mdx images to help user UX, 
 and most importantly our lighthouse scores ;-).
 That's the basic summary of how the articles are currently implemented
 
    
