$(function(){
    $('.one').hide();
    $('.two').hide();

    $('#btn-two').click(function(){
        $('.one').slideDown();    $('.two').show(800);
    });
    $('#btn-one').click(function(){
        $('.one').slideUp();    $('.two').hide(800);
    });

    // FORM
    $('#submitBtn').mouseover(function(){
        let fname = $('#fistname').val();  
        if(fname === ""){ alert("Firstname cannot be empty") }
        let lname = $('#lastname').val();  
        if(lname === ""){ alert("Lastname cannot be empty") }
    });

    $('#submitBtn').click(function(){
        let fname = $('#fistname').val();  
        let lname = $('#lastname').val(); 
        
        alert("Firstname : " + fname + " Lastname : " + lname);
    });


    // CAR MODAL GRID
    for (let i = 1; i <= 6; i++) {
        $('#cardiv_'+i).click(function(){
        let car_img = $('#img_'+i).attr('src');
        $('#modalImg').attr('src', car_img);
        let car_name = $('#name_'+i).text(); 
        $('#modalCarName').html(car_name);
        let car_price = $('#price_'+i).text(); 
        $('#modalCarPrice').html("Price: " + car_price);
    });
    }

    

    // LIGHT & DARK MODE
    $('#sun').hide();
    $('#moon').click(function(){
        $('#sun').show();
        $('#moon').hide();
        
        $('.main').addClass('main-dark');
        $('.all').addClass('all-dark-text');
        $('.left-menu').addClass('left-menu-dark');
        $('.hero').addClass('hero-dark');
        $('.car-div').addClass('car-div-dark');
        $('.btn-dark').addClass('btn-dark-light');
        $('.modal-content').addClass('modal-content-dark');
        $('.modal-body').addClass('modal-body-dark');
    });

    $('#sun').click(function(){
        $('#moon').show();
        $('#sun').hide();
        
        $('.main').removeClass('main-dark');
        $('.all').removeClass('all-dark-text');
        $('.left-menu').removeClass('left-menu-dark');
        $('.hero').removeClass('hero-dark');
        $('.car-div').removeClass('car-div-dark');
        $('.btn-dark').addClass('btn-dark-light');
        $('.modal-content').removeClass('modal-content-dark');
        $('.modal-body').removeClass('modal-body-dark');
    });
});