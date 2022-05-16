$(document).ready(function () {
    $('#clickHere').hide();
    //on click for submission of form
    $('#submitButton').on('click', function (e) {
        e.preventDefault();
        let myForm = $('#signUpForm')[0];
        if (!myForm.reportValidity || myForm.reportValidity()) {//if statement for form validation
            $('#elementsToBeHidden').hide();
            let userName = $('#name').val();
            let email = $('#email').val();
            let date = new Date().toDateString();
            let thankYouMessage = (`Thank you ${userName} for signing up.  We received your submission on ${date}. You will receive an email at ${email} immediately. Click Here for a complementary Artist Spotlight with information about new artists, albums and events.`);
            let thankYouMessageDiv = $('#thankYouMessageDiv');
            thankYouMessageDiv.css({
                'border': '2px solid rgb(255,175,53)',
                'margin': '5rem 1.875rem 12.5rem 1.875rem'
            }).prepend(thankYouMessage);
            $('#clickHere').show();
        }
    });
    //constructor for random artist info pool
    class ArtistInfo {
        constructor(name, info, image) {
            this.name = name;
            this.info = info;
            this.image = image;
        }
    }
    let artist1 = new ArtistInfo('Breland', '<p>This Atlanta-based artist made a country-trap statement with his prevalent song "My Truck". His genius juxtaposition combines pop, country and rap in a creative and interesting way. Check out dynamic singles such as "Hot Sauce" and "In the Woulds" on his self-titled EP.</p>', '../images/Breland.jpeg');
    let artist2 = new ArtistInfo('Paul McCartney', '<p>This legend recently reissued a deluxe edition of the 1997 gem <i>Flaming Pie.</i> It includes alluring ballads such as "Beautiful Night" as well as home recordings and studio outtakes.</p>', '../images/paulMcCartney.jpg');
    let artist3 = new ArtistInfo('John Legend', '<p>His recent hit "Conversations in the Dark" gave us a well-received dose of romanticism with promises to never falter. It is as if dedication and affection offer so much power one may alter history itself. His seventh album <i>Bigger Love</i> includes a beautifully crafted rendition of the doo-wop classic "I Only Have Eyes for You."</p>', "../images/johnLegend.jpg");
    let artist4 = new ArtistInfo('H.E.R', `<p>The French call it <i>je ne sais quoi.</i> Branding experts call it clout. TikTok teens call it hype. Whatever you want to call it, H.E.R. has it in spades. This dynamic R & B artist won a multitude of awards since her debut at the Apollo at the age of ten. This year alone, her accolades include... a Grammy for Song of the Year "I Can't Breathe", an Oscar for "Fight For You", and the I Heart Radio award for Artist of the Year.</p>`, "../images/Stratocaster.jpeg");
    let artist5 = new ArtistInfo('Elton John', `<p>He was nominated for an oscar and won the I Heart Radio Icon award after a great year of well-deserved recognition. His movie <i>Rocketman</i> in 2019 is a biographical musical fantasy drama based on the life and music of this extraordinary british artist</p>`, "../images/eltonJohn.jpeg");
    let artist6 = new ArtistInfo('NoCap', `<p>This Mobile, Alabama rapper and his cohort Rylo are at the center of one of the most exciting music scenes in America. NoCap, Rylo and OMB Peezy all started underground in Mobile, a city with 20 percent of people living below the poverty line. Mobile is only 300 miles from Atlanta and shares a lot of the bigger city's sounds with an even thicker southern accent.  Rylos's song "Project Baby" and NoCap's "Ghetto Angel's" echo the difficulty of trying to make it in a small, financially inadequate town in southern America.</p>`, "../images/SennMicrophone.jpg");
    let artist7 = new ArtistInfo('Rico Nasty', `<p>Rapper Rico Nasty has changed musically since her first streaming hit "Hey Arnold" brought Rico a glimpse of stardom. She has made a habit of seeking out her creative boundaries, then dismantling them. Her newer projects began to sound joyously angry, somewhere between punk rock and hip-hop. In 2019, Rico released her best work yet: <i>Anger Management</i>, a full-length collab tape with Kenny Beats. Her debut album <i>Nightmare Vacation</i> is due later this year.</p>`, "../images/ricoNasty2.jpg");
    let artist8 = new ArtistInfo('Bob Dylan', `<p>This legend's new album <i>Rough and Rowdy Ways</i> is brilliantly timed in the midst of a quarantine and revolutionary movement in the streets of our nation. His first batch of new songs in 8 years is an absolute classic. You can hear all of the roaring thunder in his tone as he sings in a memorable, breath-taking moment in history. </p>`, "../images/bobDylan.jpg");
    let artistArray = [];//empty array for each artist info instance
    artistArray.push( artist6);
    let randomArtistInfo = artistArray[Math.floor(Math.random() * artistArray.length)];
    //on click for thank you message to show artist spotlight
    $('#clickHere').on('click', function () {
        //hiding thank you message and form from previous actions
        $('#elementsToBeHidden, #thankYouMessageDiv').hide();
        //creating container to put all artist spotlight information
        let containerForSpotlight = $('<div id="containerForSpotlight" class="container-fluid">')
        let artistSpotlightDiv = $('<div id="artistSpotlightDiv" class="row align-items-center justify-content-center text-white">');
        $(containerForSpotlight).after('#navbar');
        $(artistSpotlightDiv).appendTo(containerForSpotlight);
        $('#thankYouMessageDiv').after(artistSpotlightDiv);
        //creating elements for different aspects of artist information
        let artistHeading = $('<h1 class="m-2" id="artistHeading">Artist Spotlight</h1>');
        let artistName = $('<h4 class="my-3 mx-2">');
        let artistInfo = $('<p class="m-2">');
        let artistNameAndInfo = $('<div id="artistNameAndInfo" class="col-6">');
        let artistPictureDiv = $('<div id="artistPictureDiv" class="col-5">');
        let artistPicture = $(`<img src='${randomArtistInfo.image}' class="ml-2 img-fluid artistPicture">`);
        $(artistSpotlightDiv).prepend(artistPictureDiv);
        $(artistHeading).prependTo(artistNameAndInfo);
        artistName.text(`${randomArtistInfo.name}`).addClass('artistName');
        artistInfo.html(`${randomArtistInfo.info}`).addClass('artistInformation');
        $(artistName).appendTo(artistNameAndInfo);
        $(artistInfo).appendTo(artistNameAndInfo);
        $(artistNameAndInfo).appendTo(artistSpotlightDiv);
        $(artistPicture).appendTo(artistPictureDiv);
        //mouseover styling for picture and heading
        $('#artistNameAndInfo').on('mouseover', function () {
            $('#artistHeading').addClass({'font-size': '3.5rem',
                'text-shadow': '0.15rem 0 rgb(249, 149, 150)',
                'font-family': 'Noteworthy, LingWai SC, Nanum Brush Script, cursive'})
            $('#artistHeading').addClass( 'headingHover');
            $('.artistPicture').css({
                'opacity': '100%',
                'box-shadow': '0.135rem 0.135rem 0.135rem 0.135rem rgb(255,175,53)'
            })
        })
    })
})
