# AceShare Campus Borrowing

## Project Title

AceShare Campus Borrowing

## Project Description

AceShare is a website where students at the University of Evansville can lend and borrow items from each other. Sometimes a student only needs something for a short time, like a calculator, charger, textbook, or small tool. They may not know who has one, so they end up buying it or asking around campus.

The website will give students one place to post items they are willing to lend and search for something they need. A user will be able to view available items, create a listing, look at the details, and send a request to borrow an item. The layout will be similar to an online marketplace, with category filters and item cards, but it will be made specifically for borrowing on campus. The goal is to make borrowing between students easier and more organized.

## Target Users

The main users are University of Evansville students who live on or near campus. This includes students who need an item for a short time and students who have items they do not mind lending. It would be most useful for common school or dorm items that are not very expensive.

## Core Features

1. **View available items:** Users can see a list of items that other students have posted.

2. **Search and filter:** Users can search by item name or category to find what they need faster.

3. **Create a listing:** Users can add an item by entering its name, category, description, availability, pickup location, and a photo.

4. **View item details:** Users can open a listing to see more information before requesting it.

5. **Request an item:** Users can send a request to borrow an available item and view the status of the request.

6. **Manage listings and requests:** Users can view their own listings, change an item's availability, and accept or decline requests.

## Project Scope

I think this project is possible to complete in about eight weeks because I am keeping the main workflow simple. The essential parts are creating listings, viewing and searching for items, and sending or managing borrowing requests. These features are enough to show the main purpose of the website.

Some optional features are email notifications, ratings, in-app messaging, and University single sign-on. I will only add these if the main features are working first. The most challenging part will probably be making sure the request status stays correct when different users try to borrow the same item. User login and connecting the frontend to the database may also take extra time.

## Initial UI Sketch

The first version will have four main screens. The main page will have a marketplace-style layout with search at the top, filters on the left, and item cards in a grid.

### Items Page

```text
+----------------------------------------------------------------+
| AceShare       [ Search campus items...          ]  My Activity |
+----------------------------------------------------------------+
| Categories        | Items Near You                              |
|                   |                                             |
| All Items         | +----------------+  +----------------+      |
| Calculators       | |  Item Photo    |  |  Item Photo    |      |
| Textbooks         | | TI-84          |  | Phone Charger  |      |
| Electronics       | | Calculator     |  | Electronics    |      |
| Tools             | | Available      |  | Available      |      |
|                   | +----------------+  +----------------+      |
| [Add New Item]    |                                             |
+----------------------------------------------------------------+
```

### Add Item Page

```text
+-----------------------------------------------+
| Add an Item                                   |
+-----------------------------------------------+
| Item name:       [                         ]   |
| Category:        [ Select category         ]   |
| Description:     [                         ]   |
| Item photo:      [ Choose File             ]   |
| Pickup location: [                         ]   |
| Availability:    [ Available              ]   |
|                                               |
|                         [Cancel] [Save Item]   |
+-----------------------------------------------+
```

### Item Details Page

```text
+----------------------------------------------------------+
| [Back to Items]                                          |
+----------------------------------------------------------+
|                         | TI-84 Calculator                |
|                         | Category: Calculators           |
|      Item Photo         | Status: Available               |
|                         | Pickup: Library                 |
|                         |                                 |
|                         | Works normally and includes a   |
|                         | charging cable.                 |
|                         |                    [Request]    |
+----------------------------------------------------------+
```

### My Activity Page

```text
+----------------------------------------------------------+
| My Activity                                              |
+----------------------------------------------------------+
| [My Listings] [Borrowing Requests] [Requests Received]   |
+----------------------------------------------------------+
| Calculator                         Available              |
| [Edit Listing] [Mark Unavailable]                         |
+----------------------------------------------------------+
| Phone Charger                      Request Pending        |
| [View Request] [Cancel]                                  |
+----------------------------------------------------------+
```

The navigation bar will let users move between the marketplace, their activity, and the form for adding an item. Item photos and cards should make the main page easy to browse. The design may change after I begin building the full interface.

## Initial Data Requirements

The application will need to store the following information:

- **Users:** name, university email, and account information.
- **Items:** item name, description, category, photo, availability, owner, and pickup location.
- **Categories:** groups such as calculators, textbooks, electronics, and tools.
- **Borrowing requests:** requested item, borrower, request date, and current status.
- **Request history:** when a request was accepted, declined, canceled, or completed.

