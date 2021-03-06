# Plank App

## Step 1 - Getting Started
 - Used create-react-app
 - Removed unnecessary files and images
 - Created github repo

## Step 2 - Constructing Layout
 - Imported svgs 
 - Positioned title and svgs
 - Imported Roboto font
 - Created content area layout

 ## Step 3 - Adding Nav Component
 - Created nav component
 - Styled menu items
 - Added border under "All" item and underneath the nav

 ## Step 4 - Displaying Data
 - Installed Axios
 - Used componentDidMount lifecycle to fetch API data
 - Used console.log() to log necessary data (testing)
 - Created state and used setState to store API data
 - Used the map method to loop over the array of data and displayed that data on the screen (title, thumbnail, category, and excerpt)

 ## Step 5 - Styling the Data
 - Styled the title, thumbnail, excerpt, and category
 - Added 'View Case' button with arrow icon
 - Fixed the position of the images

  ## Step 6 - Filtering the Data
 - Created function to filter categories.
 - Tested artsFilter function to filter the arts and culture category.
 - Made request to the categories API and stored it in caseCategory using setState
 - Created a condition to check for the category. If the condition is true, a variable is created (artData) that would store the filtered data. Only the arts and culture category would be returned. Because this is an array, the map method would be the best option in order to loop through all the arts and culture case studies. Used setState to make caseData = artData. This will display the new filtered data on the screen since the map method is already being used on caseData.
 - Binded the artsFilter method. Ex. `this.artsFilter = this.artsFilter.bind(this)`
 - Passed the artsFilter function as a prop on the Nav component.
 - Used the onClick event on the "Arts and Culture" li item to call the artsFilter function.

 (ex. `onClick={this.props.artsFilter}`)

 - Created a nonProfitsFilter function to filter the nonProfits category and repeated the same steps when creating the artsFilter function.
 - Ran into an issue: nonProfitsFilter function worked but when the 'Arts and Culture' menu item is selected, it doesn't get filtered and nothing is shown on the screen. Checked the console.log and saw it was returning undefined when trying to get caseData category. Used console.log to check the caseData category and found that once "Arts and Culture" is clicked, the caseData only returns the arts and cuture category and can't find the nonProfits category. The solution is to reset or change the caseData back to it's original array. Even though the case study API is used in the componentDidMount lifecycle method, the solution was to call the case study API again on both functions and setState was used to store the data. It worked. Both the arts and culture and non profit category are filtered. However, theres a slight issue. When a user clicks on certain categories like the publishing and education, all of the categories are shown for a split second because of the case study API is called. This strategy was later applied to all the functions but a better solution might exist for this issue.
 - Created publishingFilter, wellnessFilter, sportsFilter, and allFilter functions and filtered every category.
 - There is no result for the "Sports" category. Created noResult as a state and set it to false. In the sportsFilter function, setState was used to change it to true. A ternary operator was created and "No results found" was rendered if noResult was truthy. If false, nothing was rendered. Ran into small issue. "No results found" was displayed on the other categories. Solution was to set it to false using setState in the beginning of every filter function except the sportsFilter.
 
 ## Step 7 - Adding Active class
 - When user clicks on one of the nav items, there should be a border around that item to suggest that the user is currently on that category.
 - Created allActive, artsActive, nonProfitsActive, publishingActive wellnessActive, sportsActive as a state and set it as a boolean.
 - Set all of the Active states to false in the filter functions except for the one that is active. For example:

      allActive: false,
      artsActive: true,
      nonProfitsActive: false,
      publishingActive: false,
      wellnessActive: false,
      sportsActive: false

      This means there will be a border around arts and culture and the border from the previous category will be removed.

 - Passed all of the active states as a prop to the nav component.
 - Used a ternary operator to add the active class. If the active state is true, the "active" class will be added to the category, which will give it a border. For example:

`<li onClick={this.props.nonProfitsFilter} className={this.props.nonProfitsActive ? "active": ''}>Non-Profits</li>`

## Step 8 - Adding Animations
 - Added animation on the navigation. Ease in out animation that only lasts 1 seconds.
 - Added animation on thumbnails. Scales up when user hovers. More interactive.

 ## Step 9 - Making App Responsive
  - Added media queries and made app responsive.
  - Styling changes were made at the max-width 1350px breakpoint (laptop). The 2 columns layout in the content area for the case study was replaced with a 1 column layout at this breakpoint in order to avoid overwhelming user and cramming content.
  - Styling changes were made at the max-width 765px breakpoint (tablet). Navigation items are stacked up on each other to preserve space (display: block; width:100%). Font-size is also reduced.
  Content is pushed to the far left but still easily seen while leaving some space to the right. Easier on the eyes and a better user experience.
  - Styling changes were made at the max-width 376px breakpoint (phone). Reduced font-size and properly aligned thumbnails.

  ## Step 10 - Refactor and Cleanup (Final)
 - Removing console.logs
 - Renaming variables
 - Making code more readable
 - Making small changes to ReadMe