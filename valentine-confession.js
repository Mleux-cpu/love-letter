$("#messageState").on("change", function() {
    // Clean up animation classes before starting a new one
    $(".message").removeClass("openNor closeNor no-anim");
    
    if ($(this).is(":checked")) {
        // --- OPENING ---
        $(".message").removeClass("closed").addClass("openNor");
        $(".heart").removeClass("closeHer openedHer").addClass("openHer");
        
        // Add the sunflower background to the body
        $("body").addClass("bg-active");
        
        // Optional: Animate container color if you still want a tint over the image
        $(".container").stop().animate({"backgroundColor": "rgba(244, 143, 177, 0.3)"}, 2000);
        console.log("Opening... Sunflowers appearing!");
        
    } else {
        // --- CLOSING ---
        $(".message").addClass("closeNor");
        $(".heart").removeClass("openHer beating").addClass("closeHer");
        
        // Remove the sunflower background
        $("body").removeClass("bg-active");
        
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("Closing... Back to pink.");
    }
});

// Message Animation Listener
$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    if ($(this).hasClass("closeNor")) {
        $(this).addClass("closed");
    }
    $(this).removeClass("openNor closeNor").addClass("no-anim");
});

// Heart Animation Listener
$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    if ($(this).hasClass("openHer")) {
        // Heart stays at the bottom and starts beating
        $(this).addClass("openedHer beating");
    } else if ($(this).hasClass("closeHer")) {
        // Heart is back at center, stops moving
        $(this).removeClass("openedHer beating");
    }
    $(this).removeClass("openHer closeHer");
});