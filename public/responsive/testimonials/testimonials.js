
    document.addEventListener("DOMContentLoaded", function(event) { 
        var testiomnialData = [
            {
                avatar: "../../public/media-source/testimonals/image1_ankita.jpg",
                name: "Ankita",
                review: " I am Ankita , 1st year in University Of Kragujevac.  I had a fantastic experience with the Medplasia Medicos . Their guidance and support were instrumental in helping me secure admission in Serbia for medical university. I highly recommend their services to anyone pursuing an overseas MBBS education."
            },
            {
                avatar: "../../public/media-source/testimonals/image2_aishwaryaS.jpg",
                name: "Aishwarya Shuryanshi",
                review: "My name is Aishwarya shuryanshi from Uttarakhand. I am 1st year student of University Of NIS. Medplasia medicos made my dream of studying medicine overseas a reality. Their expert guidance and unwavering support were invaluable. I'm grateful for their assistance in making my aspirations come true."
            },

            {
                avatar: "../../public/media-source/testimonals/image3_joytiD.jpg",
                name: "Jyoti Dinkar",
                review: "Hlw I am transfer student from ukraine. They streamlined the admission process, provided expert guidance, and made my dream of studying medicine overseas a reality. Highly recommended!"
            },
            {
                avatar: "../../public/media-source/testimonals/image4_Dharmista.jpg",
                name: "Dharmistha",
                review: "I am extremely grateful to the Medplasia Medicos for their invaluable guidance and support throughout my journey as a medical student. Their expertise and personalized advice have been instrumental in helping me navigate the complex world of medical education. Their team has been there every step of the way. Thanks to their guidance . I highly recommend their services to any aspiring medical student looking for direction and mentorship."
            },
            {
                avatar: "../../public/media-source/testimonals/image5_jitendrV.jpg",
                name: "Jitender Vats",
                review: "I am Jitender Vats 4th year medical student from University Of Kragujevac, Serbia Our experience with Medplasia Medicos has been invaluable to our medical education. Your resources and support have significantly enhanced my learnings. Thank you for being an essential part of my journey to becoming competent healthcare professional."
            }, {
                avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                name: "Marys Lobb",
                review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
            }]
        var slideHolder = document.querySelector("#slideHolder")
        for (let i of testiomnialData) {
           slideHolder.innerHTML += `<div class="swiper-slide shadow-lg rounded-lg bg-green-300"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`;
        }
        
        const swiper = new Swiper('#craouselContainer', {
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 2.3,
            loop: true,
            spaceBetween: 30,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                depth: 800,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: { delay: 5000 }
        });
        window.onresize = queryResizer
        queryResizer()
        function queryResizer() {
            if (window.innerWidth < 724) swiper.params.slidesPerView = 2
            if (window.innerWidth > 501) swiper.params.slidesPerView = 2
            if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
            if (window.innerWidth < 501) swiper.params.slidesPerView = 1
            swiper.update()
        }
        
    });
    
