const divs = document.querySelectorAll('.image');

let preview_close; 	
let video_close;

let preview_container; 
let preview_image;
let mode;
let close_status = 'to_hide';

divs.forEach(el => el.addEventListener('click', event => {
	let source_image = el.getBoundingClientRect();


	if (el.tagName == 'IMG') {
		preview_image = document.createElement('img');	
		preview_close = document.createElement('div');

		preview_image.src = el.src;
		preview_container = document.createElement('div');
  	
		preview_close.className = 'image_close';
		preview_image.className = 'image_preview';
		preview_container.className = 'preview_container';

		document.body.append(preview_close);
		document.body.append(preview_container);
		preview_container.append(preview_image);
	
		mode = 'img';
	} else if (el.tagName == 'VIDEO') {
		preview_image = document.createElement('video');	
		preview_container = document.createElement('div');
		video_close = document.createElement('div');
		video_close_text = document.createElement('div');

		preview_image.src = el.src;
		preview_image.preload = 'metadata';
		preview_image.controlslist = 'nodownload';
		preview_image.controls = ' ';
		preview_image.autoplay = ' ';
		preview_image.type = 'video/mp4';
		preview_image.style.zIndex = 100;

		video_close_text.textContent = 'Close Video';

		video_close.className = 'video_close';
		preview_image.className = 'image_preview';
		preview_container.className = 'preview_container';
		video_close_text.className = 'video_close_text';

		preview_container.append(video_close);
		video_close.append(video_close_text);
		document.body.append(preview_container);
		preview_container.append(preview_image);
	
		mode = 'video';
	}
	

	anime({
           targets: '.image_preview',
	   scale: 1.1,
	   duration: 300,
	   easing: 'cubicBezier(0,.5,.5,3)'	
	});

	anime({
           targets: '.image_preview',
           opacity: 1,
           duration: 150,
           easing: 'easeInOutQuad'	
	});

	anime({
	  targets: '.preview_container',
           opacity: 1,
           duration: 150,
           easing: 'easeInOutQuad'	
	});

	console.log('Image Preview Loaded');
	if (mode == 'img') {

		preview_close.addEventListener('click', event => {

			anime ({
			   targets: '.image_preview',
			   scale: 0.8,
			   duration: 300,
			   easing: 'cubicBezier(0,.5,.5,3)'
			});
		
			anime ({
			   targets: '.image_preview',
			   opacity: 0,
			   duration: 150,
			   easing: 'easeInOutQuad'
			});

			anime({
			   targets: '.preview_container',
			   opacity: 0,
			   duration: 150,
			   easing: 'easeInOutQuad'	
			});

			setTimeout (() => {
				preview_container.remove();
				preview_image.remove();
				preview_close.remove();
			}, '150' );
			
			console.log('Image Preview Unloaded');
		});

	} else if (mode == 'video') {
  
			setTimeout (() => {
        if (close_status == 'to_hide') {
          anime ({
            targets: '.video_close',
            opacity: 0.1,
            scale: 0.9,
            duration: 300,
            easing: 'cubicBezier(.23,1,.32,1)'
          });

          close_status == 'hidden';
      console.log(close_status);
        }
			}, '1000' );
    

		video_close.addEventListener("mouseenter", (event) => {
	
			anime ({
				targets: '.video_close',
				opacity: 1,
				scale: 1,
				duration: 300,
				easing: 'cubicBezier(.23,1,.32,1)'
			});

      close_status = 'shown';
		});

    video_close.addEventListener("mouseleave", (event) => {
      
      close_status = 'to_hide';

      setTimeout (() => {
        if (close_status == 'to_hide') {
          anime ({
            targets: '.video_close',
            opacity: 0.1,
            scale: 0.9,
            duration: 300,
            easing: 'cubicBezier(.23,1,.32,1)'
          });
        }
      }, '1000' );
    });
		
		video_close.addEventListener('click', event => {

			anime ({
			   targets: '.image_preview',
			   scale: 0.8,
			   duration: 300,
			   easing: 'cubicBezier(0,.5,.5,3)'
			});
		
			anime ({
			   targets: '.image_preview',
			   opacity: 0,
			   duration: 150,
			   easing: 'easeInOutQuad'
			});

			anime({
			   targets: '.preview_container',
			   opacity: 0,
			   duration: 150,
			   easing: 'easeInOutQuad'	
			});

			setTimeout (() => {
					preview_image.remove();
					preview_container.remove();
					video_close.remove();
			}, '150' );
				
			console.log('Image Preview Unloaded');
		});	
	}
}));
