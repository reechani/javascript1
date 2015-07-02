/* Baddie4 - Assignment */
/*
You should start by uncommenting blocks of code or functions that are needed for the assignment.
Follow the instructions given for each of these blocks.
After that you can start doing the assigments.
Assignment-sections start like this:
    // -------------------------------------------
    // ASSIGNMENT

Note that the INSTRUCTION can be to fill a whole BLOCK of code, not just one row.
In some cases you have to fill in some missing parts of code or change parts of it.
It can look like this:
    if(false)
These should be filled out by replacing the boolean false with your code, for example:
    if(x > 10)

Good luck!
*/

(function(){
    "use strict";

    console.log("Ready");

    /*
    CREATE BADDIE AS AN OBJECT TO #baddie
     */
    // What properties should baddie have?
        // Position - coordinates on the screen (relative to #content)
        // Size - Size in px - width/height
        // Element - DOM element (#baddie)
        // Image - Image to use for baddie (instead of using stylesheet for it)
    // What methods should baddie have?
        // init - initiate all needed properites
        // moveTo - move to a new position
        // draw - changes baddie top/left on screen (style) to it's current coordinates
        // turn - toggles left/right-class

    var myBaddie = {
        // Properties
        position: {
            left: 0,
            top: 0
        },
        size: {
            width: 0,
            height: 0
        },
        element: null,
        img: "img/",
        // Methods
        /**
         * Initiate all properites
         * @param  {object} position Object for positions, left and top in px
         * @param  {object} size     Object for size, width and height in px
         * @param  {object} element  DOM element
         * @param  {string} img      Src for image to use as baddie
         */
        init: function(position, size, element, img) {
            console.log("Called with:", position, size, element, img);
            // -------------------------------------------
            // ASSIGNMENT
            // Transfer parameters to the object properties
            // position, size, element, img
            // HINT: Remember to use this



            // Initiate the DOM-element
            this.element.style.width = this.size.width + "px";
            this.element.style.height = this.size.height + "px";
            this.element.style.backgroundImage = "url(" + this.img + ")";
            this.element.style.backgroundSize = this.size.width + "px " + this.size.height + "px";
            this.element.classList.add("right");

            // Finally, draw the finished baddie
            this.draw();
        },
        /**
         * Places baddie visible in the DOM by chaning it's style.top and style.left
         */
        draw: function() {
            // Change left and top of DOM element
            this.element.style.left = this.position.left + "px";
            this.element.style.top = this.position.top + "px";
        },
        /**
         * Turns baddie left or right by toggling the 2 classes
         */
        turn: function() {
            // Toggle removes the class if there, and adds it if not - on/off function
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods
            this.element.classList.toggle("left");
            this.element.classList.toggle("right");
        },
        /**
         * Changes baddies position to that given, and then draws it out at that position on the screen
         * @param  {number} left The px-position to place baddie at
         * @param  {number} top  The px-position to place baddie at
         */
        moveTo: function(left, top) {
            // Change the left and top positions
            this.position.left = left;
            this.position.top = top;
            // Draw out the new positions in the DOM
            this.draw();
        }
    };

    // -------------------------------------------
    // ASSIGNMENT
    // Initiate baddie with all the needed parameters
    // Make sure to read up on what baddie contains, and what the method init() expects as parameters
    // HINT:
        // position and size are objects - make sure you create them as exepected in the object
        // element is a DOM element - use document.getElementById() to get the #baddie element
        // img is a string - the path to the baddie image, should start with the folder name "img/".
        // Make sure you have a baddie picture.
    myBaddie.init(

    );


    // -------------------------------------------
    // ASSIGNMENT
    // Try out turn() and moveTo()
    // Call on turn() to see that baddies does turn (default start is facing right)
    // Call on moveTo() with parameters to move baddie to a given position (default is 0,0)



    /*
    ADD A BOARD WITH TILES TO #content
     */

    // What properties should the board have?
        // Tile-size - what sizs the tiles should have
        // Grid-size - how many rows and columns the board should have
        // Tile-array - the actual tile array, should match gridsize in size
        // Element - DOM element, #content
    // What methods should the board have?
        // init - initiate all properites
        // draw - draw all the tiles out into the element #content

    var myBoard = {
        // Properties
        tilesize: 0,
        tilearray: [],
        element: null,
        // Methods
        /**
         * Initiates all properties and draws out the board
         * @param  {number} tilesize  What width/height the tiles should have - same width and height because cubes
         * @param  {object} element   DOM element of the board
         * @param  {object} tilearray 2D array of the tiles on the board
         */
        init: function(tilesize, element, tilearray) {
            console.log("Called with:", tilesize, element, tilearray);
            // -------------------------------------------
            // ASSIGNMENT
            // Transfer parameters to the object properties
            // tilesize, element, tilearray
            // HINT: Remember to use this
            


            // Change the DOM - assume 2D array
            // The length of the main array is the number of rows - height
            // The length of the inner array is the number of columns - width
            this.element.style.height = this.tilesize * this.tilearray.length + "px";
            this.element.style.width = this.tilesize * this.tilearray[0].length + "px";

            // Draw the result out
            this.draw();
        },
        /**
         * Creates and adds all the tiles to the board DOM element
         */
        draw: function() {
            var tile, i, j;
            // Loop out all the tiles
            for(i = 0; i < this.tilearray.length; i++) {
                for(j = 0; j < this.tilearray[i].length; j++) {
                    // Create the tile
                    tile = document.createElement("div");
                    // Add width and height
                    tile.style.width = tile.style.height = this.tilesize + "px";
                    // Add class names, "tile" for tiles, and tXX for tile type, like t10
                    tile.className = "tile t" + this.tilearray[i][j];
                    // Id to be able to fetch the tile later n + row + column
                    tile.id = "n" + i + j;
                    // Append the new tile to the board element
                    this.element.appendChild(tile);
                }
            }
        }
    };

    // -------------------------------------------
    // ASSIGNMENT
    // Initiate the board with all the needed parameters
    // Make sure you read what the method init() expects
    // HINT:
        // tilesize is a number for the width & height of the tiles, our examples uses 32 (they are 32x32px big)
        // element is a DOM element - use document.getElementById() to get the #content element
        // tilearray is an array that represents the board, but this time it's a 2D array
            // This means that each row is it's own array, so you can take the array from baddie3 and change that a bit
            // For example here is a small 2D array with 3 rows and 3 columns
            // var my2DArray = [
            //     [11,11,10],
            //     [11,10,10],
            //     [11,13,10]
            // ];
    myBoard.init(

    );


    /*
    MAKE THE BOARD INTERACT WITH BADDIE BY CREATING A NEW GAME OBJECT
    */

    // Connects board and baddie
    // Properites
        // board - board object
        // baddie - baddie object
        // baddie position - position of baddie in grid - not screen coordinates
    // Methods
        // init - Initiate all properites and starting positions
        // moveBaddie - try to move baddie the given steps
        // collision - check for wall and tile collisions

    var myGame = {
        // Properties
        board: null,
        baddie: null,
        baddiePos: {
            // Uses x,y because it's a grid - 2D array
            x: 0,
            y: 0
        },
        // Methods
        /**
         * Initiates properties and baddie position on board
         * @param  {object} board    The board object
         * @param  {object} baddie   The baddie object
         * @param  {object} startPos Object with starting position for baddie as x,y in grid
         */
        init: function(board, baddie, startPos) {
            console.log("Called with:", board, baddie, startPos);
            // -------------------------------------------
            // ASSIGNMENT
            // Transfer parameters to the object properties
            // board, baddie, startpos
            // HINT: Remember to use this



            // Baddies positions are relative to #content
            // Each step will be the size of a tile
            this.baddie.moveTo(
                this.board.tilesize * this.baddiePos.x,
                this.board.tilesize * this.baddiePos.y
            );
        },
        /**
         * Attempts a move in the directions given (left, top) where each step is a full tile size
         * 1 left will add 1 step to left - moves to the right and so on
         * @param  {number} left The amount of tile steps to move (-1 moves to the left)
         * @param  {number} top  The amount of tile steps to move (-1 moves up)
         */
        moveBaddie: function(left, top) {
            // First - check for collisions in baddies new position
            // What is baddies new position?
            var newPos = {
                x: this.baddiePos.x + top,
                y: this.baddiePos.y + left
            };

            // Use collision function to check if there was any collision
            if(this.collision(newPos.x, newPos.y) === false) {
                // Move baddie to the new position in the _grid_
                this.baddiePos.x = newPos.x;
                this.baddiePos.y = newPos.y;

                // -------------------------------------------
                // ASSIGNMENT
                // Move baddie to his new position on the screen with moveTo()
                // Fill out the 2 missing parameters
                // HINT:
                    // Each step is the size of the boards tiles which in our case is 32
                    // For example, if baddie is on tile (2,2) then his position in our example is
                        // 64x64px, and on tile (3,2) gives position 96x64px and so on
                    // Note that x is the row therefore transfers to top
                        // and y is column and transfers to left
                    // Make sure to carefully read what moveTo() does, and try it out a few times
                this.baddie.moveTo(

                );

            } else {
                // Collided
                console.log("Collided at", newPos.x, newPos.y);
            }

        },
        /**
         * Check if the given tile position (x - row, y - column) has a tile that causes collision
         * or is outside of the grid
         * @param  {number} x Row of tile
         * @param  {number} y Column of tile
         * @return {boolean} False if no collision, true if collision
         */
        collision: function(x, y) {
            // Tile collision on tiles: 11, 12
            // Outer wall collide on negative x,y
            // Outer wall collide on x,y bigger than array size
            if(this.board.tilearray[x] === undefined ||
                this.board.tilearray[x][y] === undefined) {
                // Tile out of bounds
                return true;
            } else {
                // Tile was in bounds of grid, check what tile it was
                switch(this.board.tilearray[x][y]) {
                    // Non-colliding tiles
                    case 10:
                    case 13:
                        return false;
                    // Everything else
                    default:
                        return true;
                }
            }
        }
    };


    // -------------------------------------------
    // ASSIGNMENT
    // Initiate the game with all the needed parameters
    // Make sure you read what the method init() expects
    // HINT:
        // Board is the previously created board object
        // Baddie is the previously created baddied object
        // startPos is an object with x & y to assign a starting position for baddie in the grid, not the screen
    myGame.init(

    );


    // -------------------------------------------
    // ASSIGNMENT
    // Try out a move with moveBaddie()



    // Create the key events for baddie to move on arrows
    // Triggers action on keypress
    document.addEventListener("keydown", function(event) {
        var key;
        // Gets what key was pressed as number
        key = event.keyCode || event.which;
        console.log(key + " was pressed");

        switch(key) {
            // -------------------------------------------
            // ASSIGNMENT
            // For each case, add a call to moveBaddie() with the parameters to move baddie 1 step in the direction for that button
            case 37: // left

                break;
            case 38: // up

                break;
            case 39: // right

                break;
            case 40: // down

                break;
            default:
                // return this function so that the default button action is performed instead
                return true;
        }

        // Baddie action was performed - prevent button default
        event.preventDefault();
    });


    // -------------------------------------------
    // ASSIGNMENT
    // Add code to so that baddie turns automatically when moving
    // You might need to change some of the code to make it work - try different solutions out
    // Make sure to write about how you solved it!


    // -------------------------------------------
    // EXTRA ASSIGNMENT
    // Add code so that baddie can push the boxes (tile 12)
    // You decide yourself where to add that code, and how it should work
    // Make sure to write about how you solved it!


}());