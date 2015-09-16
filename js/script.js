$(function() { // initializing various functions!

  countySelect();

});

/* ========== SMOOTH SCROLLING FUNCTION ==========*/
$( document ).ready(function() {

    $('a[href*=#]:not([href=#])').click(function() { /* smooth scrolling function from https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
            }
        }
    });
});

/* ========== COUNTY SELECT FUNCTION ========== */
function countySelect() {

  /* declaring new MCO prototype and then MCO objects */
  var mco = function(mcoName, website, phoneNumber, crisisNumber, countiesServed) {
    this.mcoName = mcoName;
    this.website = website;
    this.phoneNumber = phoneNumber;
    this.crisisNumber = crisisNumber;
    this.countiesServed = countiesServed;
  };

  var smokyMountainCenter = new mco(
    "Smoky Mountain Center",
    "http://www.smokymountaincenter.com/",
    828 + "." + 586 + "." + 5501,
    800 + "." + 849 + "." + 6127,
    [
      "Alexander",
      "Alleghany",
      "Ashe",
      "Avery",
      "Buncombe",
      "Caldwell",
      "Cherokee",
      "Clay",
      "Graham",
      "Haywood",
      "Henderson",
      "Jackson",
      "Macon",
      "Madison",
      "McDowell",
      "Mitchell",
      "Polk",
      "Rutherford",
      "Swain",
      "Transylvania",
      "Watauga",
      "Wilkes",
      "Yancey"
    ]
  );

  var centerPointHumanServices = new mco (
    "CenterPoint Human Services",
    "http://www.cphs.org/",
    336 + "." + 741 + "." + 9100,
    888 + "." + 581 + "." + 9988,
    [
      "Davie",
      "Forsyth",
      "Rockingham",
      "Stokes"
    ]
  );

  var cardinalInnovations = new mco(
    "Cardinal Innovations",
    "http://www.cardinalinnovations.org/",
    704 + "." + 939 + "." + 7700,
    800 + "." + 939 + "." + 5911,
    [
      "Alamance",
      "Cabarrus",
      "Caswell",
      "Chatham",
      "Davidson",
      "Franklin",
      "Granville",
      "Halifax",
      "Mecklenburg",
      "Orange",
      "Person",
      "Rowan",
      "Stanly",
      "Union",
      "Vance",
      "Warren"
    ]
  );

  var partnersBehavioralHealth = new mco(
    "Partners Behavioral Health",
    "http://www.partnersbhm.org/",
    704 + "." + 884 + "." + 2501,
    888 + "." + 235 + "." + 4673,
    [
      "Burke",
      "Catawba",
      "Cleveland",
      "Gaston",
      "Iredell",
      "Lincoln",
      "Surry",
      "Yadkin"
    ]
  )

  var allianceBehavioralHealthcare = new mco(
    "Alliance Behavioral Healthcare",
    "http://www.alliancebhc.org",
    919 + "." + 651 + "." + 8401,
    800 + "." + 510 + "." + 9132,
    [
      "Cumberland",
      "Durham",
      "Johnston",
      "Wake"
    ]
  )

  var sandhillsCenter = new mco(
    "Sandhills Center",
    "http://www.sandhillscenter.org",
    910 + "." + 673 + "." + 9111,
    800 + "." + 256 + "." + 2452,
    [
      "Anson",
      "Guilford",
      "Harnett",
      "Hoke",
      "Lee",
      "Montgomery",
      "Moore",
      "Randolph",
      "Richmond"
    ]
  )

  var trilliumHealthResources = new mco(
    "Trillium Health Resources",
    "http://www.trilliumhealthresources.org/",
    866 + "." + 998 + "." + 2597,
    877 + "." + 685 + "." + 2415,
    [
      "Brunswick",
      "Carteret",
      "New Hanover",
      "Onslow",
      "Pender",
      "Beaufort",
      "Bertie",
      "Camden",
      "Chowan",
      "Craven",
      "Currituck",
      "Dare",
      "Gates",
      "Hertford",
      "Hyde",
      "Jones",
      "Martin",
      "Northampton",
      "Pamlico",
      "Pasquotank",
      "Perquimans",
      "Pitt",
      "Tyrrell",
      "Washington"
    ]
  )

  var eastPointe = new mco(
    "Eastpointe",
    "http://www.eastpointe.net",
    800 + "." + 913 + "." + 6109,
    800 + "." + 913 + "." + 6109,
    [
      "Bladen",
      "Columbus",
      "Duplin",
      "Edgecombe",
      "Green",
      "Lenoir",
      "Nash",
      "Robeson",
      "Sampson",
      "Scotland",
      "Wayne",
      "Wilson"
    ]
  )

  /* moves .results from the right after the user selects their county of residence */
  $(".submit").click(function() {
      $(".results").css("position", "relative");
      $(".results").animate({left: "-50%"}, { duration: 800, easing: "easeOutCubic" });
  });

  /* moves .results from the left back to the right off the screen */
  $(".back").click(function() {
      $(".results").animate({left: "0%"}, { duration: 600, easing: "easeOutCubic" });
      $(".pick-a-county").css("display", "inherit");
  });

  /* county and MCO information appended to .results div */
  $("#county-select").change(function() {
      var $website = $(".website");
      var $phone = $(".phone");
      var $map = $(".map");
      var selectedCounty = $("#county-select :selected").attr("value");

      /* if/else statements to determine which MCO is selected based on the selectedCounty variable */ /*==== NOT VERY DRY! ==== */
      if ( smokyMountainCenter.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = smokyMountainCenter;
      }
      else if ( centerPointHumanServices.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = centerPointHumanServices;
      }
      else if ( cardinalInnovations.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = cardinalInnovations;
      }
      else if ( partnersBehavioralHealth.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = partnersBehavioralHealth;
      }
      else if ( allianceBehavioralHealthcare.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = allianceBehavioralHealth;
      }
      else if ( sandhillsCenter.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = sandhillsCenter;
      }
      else if ( trilliumHealthResources.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = trilliumHealthResources;
      }
      else if ( eastPointe.countiesServed.indexOf(selectedCounty) > -1 ) {
        var selectedMco = eastPointe;
      }

      $(".name").empty().append( "" + selectedCounty + " County" );
      $website.attr( "href", selectedMco.website );
      $website.empty().append( "" + selectedMco.mcoName + " website" );
      $phone.empty().append( selectedMco.phoneNumber );
      $map.attr( "src", "/images/" + selectedMco.mcoName + ".jpg" );

  });

} /* end countySelect */
