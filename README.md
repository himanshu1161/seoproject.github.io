# Site Audit App and Widget

# Requirements
1. Build a UI which will accepts “url” this can be either the root (example.com) or a sub-folder (example.com/file-name.html)
2. Use “DataForSEO” On-Page API (ENABLE BROWSER RENDERING test which includes all in Basic + Load resources + Load JavaScript + Enable browser rendering) to check the entered URL and display the result.
3. The built tool should either embeddable as an iframe or should be to accept POST request and response with the “DataForSEO” output
4. UI should be mobile-friendly

# Tools Used
Frontend: ReactJs, Tailwind CSS
API: DataForSEO On-page API
Deployment: Railway
Version Control: Git & Github

# Explaination
Search Component:

The Search Component serves as the user's point of entry, facilitating the submission of a URL through an input form. Upon user interaction, the handleSubmit function orchestrates the initiation of an API request to DataforSEO, aimed at retrieving essential data.

Data Component:

The Data Component is the central hub responsible for rendering crucial information to the user. Within this component, data retrieved from the DataforSEO API undergoes a rigorous filtering process, aligning it with specific usage and user requirements. Subsequently, the component further breaks down data into two distinct sub-components: Speed Insights and Heading Data.

Speed Insights Sub-Component:

The Speed Insights Sub-Component specializes in presenting performance-related metrics for the queried website. Specifically, data related to website speed and performance is meticulously mapped to this component, ensuring a streamlined and informative display for the end user.

Heading Data Sub-Component:

The Heading Data Sub-Component focuses on organizing and rendering essential heading tags (h1, h2, h3, etc.) for the queried webpage. By effectively mapping and presenting these tags, users are provided with a clear overview of the page's structural hierarchy and content organization.

In summary, development efforts have resulted in a seamless and user-friendly web application. Through a user-initiated search, data retrieval from the DataforSEO API, meticulous data filtering, and organized data mapping to specific components, our application successfully presents users with comprehensive insights into webpage performance and content structure. This professional approach ensures an optimal user experience while delivering valuable data in a digestible format.


# Iframe / Widget Usage
    <iframe src="https://seoprojectgithubio-production.up.railway.app/" frameborder="0" width="400" height="800"></iframe>

# Code Execution Steps

1. Clone Repository Locally
2. npm install
3. npm start
