# Favorite Tablet Hotels Bookmarker

The idea of this exercise is to develop a site where you can search for hotels and create a list of your favorite hotels. 
Please don't stress about making everything absolutely perfect. We understand work/life happens too, so manage your time to address the basics. 
The goal here is to create a proof of concept, touching on the major requirements listed below. Its up to you to how in depth and polished you want to make this.

Please feel free to ask questions along the way if you run into any issues. 


## Getting Started
 - This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). If you have a different build configuration that you prefer, please feel free to use it. 
 - Pull this repository
 - `cd hotel-bookmarker`
 - `yarn install` (or `npm install`)
 - `yarn start` (or `npm start`)
 - Make all your changes & commits. When you are finished you can push everything back to master.
 - Use the designs included in the `wireframes` directory (HotelBookmarkerLayout.sketch or HotelBookmarkerLayout.pdf). 
 - If you don't have Sketch, you can use the pdf, however Sketch is preferred as it will have specific dimensions and layouts. You can download it [here](https://www.sketchapp.com/)


## Requirements
- Completed in react
- Ability to search for a location and return a list of hotels associated with that location
- User is able to search for a location and have a result set returned. Two suggested options for doing this:
  
    (A) User types their search in entirety and then presses 'Enter'. The Enter event initiates search and returns results or "No Results Found".
  
    OR
    
    (B) Each user keystroke initiates the search populates the results section dynamically (or "No Results Found").

- The search returns a grid of hotel cards (please see attached design, available in .sketch or .pdf here.)
- Each hotel card contains a photo of the card (please use `hotrooms_large_url` )
- Each hotel card contains a caption (see design) that lists the atmosphere and style of the hotel
- Responsive (the hotel cards should collapse to 1 column layout on mobile and expand to width of the page on desktop)
- Ability to "save" the hotels you love by clicking on the gray heart. (Do not use a database for this. The hotels should only be "saved" for the user session in javascript)
- Ability to "unsave" a hotel you love from the search results by toggling the heart symbol from the search results page.
- There should be 2 routes home ("/") and a page of the bookmarked hotels ("/bookmarked-hotels"). 

## Extra Credit
- Hover animations on the Hotel Cards so that hovering on the image animates the height of the caption to shows more information about the hotel (choose anything from the returned data).
- Ability to filter the results by style and atmosphere (please see design for layout)
- Ability to remove a hotel from your favorites from the "/favorite-hotels" route. (please see design for layout.)
- Tests
- "Save" the user's favorite hotels in local storage or cookies.

## API Endpoint
In order to search for a location and get information about the hotels please use the below endpoint:

```ssh
GET https://www.tablethotels.com/_api/term_search
```

|   Key   | Required |  Example   |     Description       |
|---------|----------|------------|-----------------------|
|  query  | true     | new york   | Location search query |
| arrDate | true     | 2017-09-25 | Arrival Date          |
| depDate | true     | 2017-09-26 | Departure Date        |
|    nA   | true     |      1     | Number of Adults      |
|    nC   | true     |      0     | Number of Children    |
|    nR   | true     |      1     | Number of Rooms       |
|  lang   | true     |      en    | Language              |

You will use the user's input to populate the `query` field. 
All other values should be hard coded all the fields to the values in the table (nC, number of children, should always be set to 0, etc.).
You can use today's date and tomorrows date for arrDate and depDate (or any valid date range in the future).
We do *NOT* expect you to get input from the user for these values.

Example url:
```ssh
https://www.tablethotels.com/_api/term_search?query=New+York+City&arrDate=2017-09-25&depDate=2017-09-26&nA=1&nC=0&nR=1&lang=en
```


Sample response (*note there is a lot of data you won't end up using*):

Please use any `hotrooms_large_url` key to populate the images on the card and `criteria.atmosphere` and `criteria.style` to list the atmosphere and style.

```json
{
  additional_hotels: false,
  hotels: [
{
  _id: "103",
  _index: "hotels_in-en-2017-9-25-151746",
  _source: {
  address: [
    "147 Mercer Street"
  ],
amenities: [
  "24 hour concierge",
  "24 hour front desk",
  "Babysitting (on request)",
  "Central air conditioning",
  "Free wi-fi",
  "Library",
  "Luggage storage",
  "Restaurant",
  "Room service",
  "Self service parking (charges apply)",
  "Spa treatments (on request)"
],
amenities_ids: [
  1,
  4,
  10,
  11,
  17,
  26,
  27,
  30,
  32,
  41,
  43
],
bookable: true,
bookmarked: false,
canonical_url: "/en/nyc-hotels/the-mercer",
city: "New York City",
commission_rate: 0.15,
coordinates: {
lat: 40.724855,
lon: -73.998332
},
country_code: "USA",
country_name: "USA",
country_name_en: "USA",
criteria: {
  atmosphere: "Lively",
  criteria1_score: 58,
  criteria2_score: 79,
  criteria3_score: 0,
  style: "Contemporary Classic"
},
currency: "USD",
distance_from_loc: 0.1190359117039699,
favorite_count: 45,
feedback_stats: {
  meter_score: 19.5833,
  public_spaces_score: 19.6667,
  rooms_score: 19.8333,
  service_score: 19.3333
},
hotel_id: 118426,
hotel_name: "The Beekman - A Thompson Hotel",
hotel_name_exact: "The Beekman - A Thompson Hotel",
hotel_name_exact_lc: "the beekman - a thompson hotel",
hotel_name_exact_lc_no_stopwords: "beekman - thompson hotel",
hotel_policy: "Pets up to 35 pounds are allowed at The Beekman - A Thompson Hotel. 
Please note that an additional occupancy tax of $2.00 USD per night will apply to stays in any Suite category.",
hotel_slug: "the-beekman-a-thompson-hotel",
id: "8248",
images: [
  {
    caption: "",
    featured: 0,
    hotrooms_large_url: "cdn1.tablethotels.com/media/hotels/slideshow_images_staged/large/1068829.jpg",
    hotrooms_thumbnail_url: "cdn3.tablethotels.com/media/hotels/slideshow_images_staged/thumb/1068829.jpg",
    id: 1068829,
    language_code: "en",
    language_id: 1,
    ordering: 1,
    slideshow_image_lang_id: 1543398
  },
  {
    caption: "",
    featured: 0,
    hotrooms_large_url: "cdn3.tablethotels.com/media/hotels/slideshow_images_staged/large/1068827.jpg",
    hotrooms_thumbnail_url: "cdn3.tablethotels.com/media/hotels/slideshow_images_staged/thumb/1068827.jpg",
    id: 1068827,
    language_code: "en",
    language_id: 1,
    ordering: 2,
    slideshow_image_lang_id: 1543
  },
...
```


*Endpoint #1*
