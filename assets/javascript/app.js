$(document).ready(function () {
    console.log("ready!");
    $("#citySearch").on("click", function () {
        var siteConstant = "https://listings.shootspace.io/?q="
        var userSearch = $("#citySearchInput").val();
        userSearch = userSearch.replace(new RegExp(" "), '+')
        console.log(userSearch)
        window.location.replace(siteConstant + userSearch);
        console.log(siteConstant + userSearch);
    });
    // Switch Basic Pricing 
    $(document).on("click", ".switchBilling", function () {
        // Display starts off on SEMI-ANNUAL PRICING
        // console.log("Current billing ID: " + this.id);
        switch (this.id) {
            // Basic Pricing
            case "switchToAnnual":
                $("#basicSemiAnnualPrice").html("<h2>$20/month</h2><h6>Annual</br>Billed every year - save 30%</h6>")
                    .addClass("card-text")
                    .attr("id", "basicAnnualPrice");
                $("#switchToAnnual").html('> Switch to Monthly Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToMonthly");
                $("#basicBtn").attr("href", "##");
                break;

            case "switchToMonthly":
                $("#basicAnnualPrice").html("<h2>$29/month</h2><h6>Monthly</br>Billed every month</h6>")
                    .addClass("card-text")
                    .attr("id", "basicMonthlyPrice");
                $("#switchToMonthly").html('> Switch to Semi-Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToSemiAnnual");
                $("#basicBtn").attr("href", "###");
                break;
            
            case "switchToSemiAnnual":
            $("#basicMonthlyPrice").html("<h2>$23/month</h2><h6>Semi-Annual</br>Billed every 6mo - save 20%</h6>")
                .addClass("card-text")
                .attr("id", "basicSemiAnnualPrice");
            $("#switchToSemiAnnual").html('> Switch to Annual Billing')
                .addClass("switchBilling")
                .attr("id", "switchToAnnual");
            $("#basicBtn").attr("href", "#");
            break;
            // Premium Pricing
            case "switchToAnnualPremium":
                $("#premiumSemiAnnualPrice").html("<h2>$139/month</h2><h6>Annual</br>Billed every year - save 30%</h6>")
                    .addClass("card-text")
                    .attr("id", "premiumAnnualPrice");
                $("#switchToAnnualPremium").html('> Switch to Monthly Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToMonthlyPremium");
                $("#premiumBtn").attr("href", "#####");
                break;

            case "switchToMonthlyPremium":
                $("#premiumAnnualPrice").html("<h2>$199/month</h2><h6>Monthly</br>Billed every month</h6>")
                    .addClass("card-text")
                    .attr("id", "premiumMonthlyPrice");
                $("#switchToMonthlyPremium").html('> Switch to Semi-Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToSemiAnnualPremium");
                $("#premiumBtn").attr("href", "######");
                break;
            
            case "switchToSemiAnnualPremium":
            $("#premiumMonthlyPrice").html("<h2>$159/month</h2><h6>Semi-Annual</br>Billed every 6mo - save 20%</h6>")
                .addClass("card-text")
                .attr("id", "premiumSemiAnnualPrice");
            $("#switchToSemiAnnualPremium").html('> Switch to Annual Billing')
                .addClass("switchBilling")
                .attr("id", "switchToAnnualPremium");
            $("#premiumBtn").attr("href", "####");
                break;
        };
    });
});

// Hide navbar on scroll down
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
$(document).ready(function() {
    var banner_height = $("#navscroll").height();
    var lastScrollTop = 0;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var currScrollTop = $(this).scrollTop();
      if (scroll >= banner_height && currScrollTop > lastScrollTop) {
        $("#banner").hide();
        // $("#banner").fadeOut();
      } else {
        $("#banner").show();
        // $("#banner").fadeIn();
      }
      lastScrollTop = currScrollTop;
  
    });
  });