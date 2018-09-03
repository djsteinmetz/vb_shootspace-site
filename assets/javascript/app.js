$(document).ready(function () {
    console.log("ready!");
    $("#citySearch").on("click", function () {
        var siteConstant = "https://listings.shootspace.io/?q="
        var userSearch = $("#citySearchInput").val();
        userSearch = userSearch.replace(new RegExp(" "), '+')
        window.location.replace(siteConstant + userSearch);
    });
    // Switch Basic Pricing 
    $(document).on("click", ".switchBilling", function (event) {
        event.preventDefault();
        // Display starts off on SEMI-ANNUAL PRICING
        // console.log("Current billing ID: " + this.id);
        switch (this.id) {
            case "switchToAnnual":
                $("#basicSemiAnnualPrice").html("<h2>$20/month</h2><h6>Annual</br>Billed every year - save 30%</h6>")
                    .addClass("card-text")
                    .attr("id", "basicAnnualPrice");
                $("#switchToAnnual").html('> Switch to Monthly Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToMonthly");
                // BASIC ANNUAL PRICING LINK GOES BELOW BETWEEN QUOTES, REPLACE ##
                $('[data-cb-plan-id="basic-plan-semi-annual-2018"]').css("display", "none");
                $('[data-cb-plan-id="basic-plan-annual-2018"]').css("display", "block");
                break;

            case "switchToMonthly":
                $("#basicAnnualPrice").html("<h2>$29/month</h2><h6>Monthly</br>Billed every month</h6>")
                    .addClass("card-text")
                    .attr("id", "basicMonthlyPrice");
                $("#switchToMonthly").html('> Switch to Semi-Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToSemiAnnual");
                // BASIC MONTHLY PRICING LINK GOES BELOW BETWEEN QUOTES, REPLACE ###
                $('[data-cb-plan-id="basic-plan-annual-2018"]').css("display", "none");
                $('[data-cb-plan-id="basic-plan-monthly-2018"]').css("display", "block");
                break;

            case "switchToSemiAnnual":
                $("#basicMonthlyPrice").html("<h2>$23/month</h2><h6>Semi-Annual</br>Billed every 6mo - save 20%</h6>")
                    .addClass("card-text")
                    .attr("id", "basicSemiAnnualPrice");
                $("#switchToSemiAnnual").html('> Switch to Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToAnnual");
                // BASIC SEMI ANNUAL PRICING LINK GOES BELOW BETWEEN QUOTES, REPLACE #
                $('[data-cb-plan-id="basic-plan-monthly-2018"]').css("display", "none");
                $('[data-cb-plan-id="basic-plan-semi-annual-2018"]').css("display", "block");
                break;
            case "switchToAnnualPremium":
                $("#premiumSemiAnnualPrice").html("<h2>$139/month</h2><h6>Annual</br>Billed every year - save 30%</h6>")
                    .addClass("card-text")
                    .attr("id", "premiumAnnualPrice");
                $("#switchToAnnualPremium").html('> Switch to Monthly Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToMonthlyPremium");
                // PREMIUM ANNUAL PRICING LINK GOES BELOW BETWEEN QUOTES, REPLACE #####
                $('[data-cb-plan-id="premium-plan-semi-annual-2018"]').css("display", "none");
                $('[data-cb-plan-id="premium-plan-annual-2018"]').css("display", "block");
                break;

            case "switchToMonthlyPremium":
                $("#premiumAnnualPrice").html("<h2>$199/month</h2><h6>Monthly</br>Billed every month</h6>")
                    .addClass("card-text")
                    .attr("id", "premiumMonthlyPrice");
                $("#switchToMonthlyPremium").html('> Switch to Semi-Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToSemiAnnualPremium");
                // PREMIUM MONTHLY PRICING LINK GOES BELOW BETWEEN QUOTES, REPLACE ######
                $('[data-cb-plan-id="premium-plan-annual-2018"]').css("display", "none");
                $('[data-cb-plan-id="premium-plan-monthly-2018"]').css("display", "block");
                break;

            case "switchToSemiAnnualPremium":
                $("#premiumMonthlyPrice").html("<h2>$159/month</h2><h6>Semi-Annual</br>Billed every 6mo - save 20%</h6>")
                    .addClass("card-text")
                    .attr("id", "premiumSemiAnnualPrice");
                $("#switchToSemiAnnualPremium").html('> Switch to Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToAnnualPremium");
                // PREMIUM SEMI ANNUAL PRICING LINK GOES BELOW BETWEEN QUOTES, REPLACE ####
                $('[data-cb-plan-id="premium-plan-monthly-2018"]').css("display", "none");
                $('[data-cb-plan-id="premium-plan-semi-annual-2018"]').css("display", "block");
                break;
        };
    });
    // Hide NavBar on scroll animation
    var banner_height = $("#navscroll").height();
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var currScrollTop = $(this).scrollTop();
        if (scroll >= banner_height && currScrollTop > lastScrollTop) {
            $("#banner").hide(100);
        } else {
            $("#banner").show(100);
        }
        lastScrollTop = currScrollTop;
    });
    // Toggle Collapse
    $('.faq li .question').click(function () {
        $(this).find('.plus-minus-toggle').toggleClass('collapsed');
        $(this).parent().toggleClass('active');
    });
});

