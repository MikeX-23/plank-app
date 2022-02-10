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
 - Created function to filter categories
 - Tested artsFilter function to filter the arts and culture category
 - Made request to the categories API and stored it in caseCategory using setState
 - Created a condition to check for the category. If the condition is true, a variable is created (artData) that would store the filtered data. Only the arts and culture category would be return. Because this is an array, the map method would be best to loop through all the arts and culture case studies. Used setState to make caseData = artData. This will display the new filtered data on the screen since the map method is already being used on caseData
 - Binded the artsFilter method (ex. this.artsFilter = this.artsFilter.bind(this))
 - Passed the artsFilter function as a prop on the Nav component
 - Used the onClick event on the "Arts and Culture" li item to call the artsFilter function (ex. onClick={this.props.artsFilter})
 - Created a nonProfitsFilter function to filter the nonProfits category and repeated the same steps when creating the artsFilter function
 - Ran into an issue: nonProfitsFilter function worked but when the 'Arts and Culture' menu item is selected, it doesn't get filtered and nothing is shown on the screen. Checked the console.log and saw it was returning undefined when trying to get caseData category. Used console.log to check the caseData category and found that once "Arts and Culture" is clicked, the caseData only returns the arts and cuture category and can't find the nonProfits category. The solution is to reset or change the caseData back to it's original array. Even though the case study API is used in the componentDidMount lifecycle method, the solution was to called the case study API on both functions and setState was used to store the data. It worked. Both the arts and culture and non profit category are filterd. This strategy was later applied to all the functions but a better solution might exist
 - Created publishingFilter, wellnessFilter, sportsFilter, and allFilter functions and filtered every category
 - There is no result for the "Sports" category. Created noResult as a state and set it to false. In the sportsFilter function, setState was used to change it to true. A ternary operator was created and "No results found" was rendered if noResult was truthy. If false, nothing was rendered. Ran into small issue. "No results found" was displayed on the other categories. Solution was to set it to false using setState in the beginning of every filter function except the sportsFilter
 
 ## Step 7 - Adding Active class
 - When user clicks on one of the nav items, there should be a border around that item to suggest that the user is currently on that category
 - Created allActive, artsActive, nonProfitsActive, publishingActive wellnessActive, sportsActive as a state and set it as a boolean
 - Set all of the Active states to false in the filter functions except for the one that is active. For example:

      allActive: false,
      artsActive: true,
      nonProfitsActive: false,
      publishingActive: false,
      wellnessActive: false,
      sportsActive: false

      This means there will be a border around arts and culture and the border from the previous category will be removed

 - Passed all of the active states as a prop to the nav component.
 - Used a ternary operator to add the active class. If the active state is true, the "active" class will be added to the category, which will give it a border. 


## Step 8 - Adding Animations
 - Added animation on the navigation
 - Added animation on thumbnails. Scales up when user hovers. More interactive.