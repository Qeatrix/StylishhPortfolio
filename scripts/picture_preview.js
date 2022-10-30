const divs = document.querySelectorAll('.image');

divs.forEach(el => el.addEventListener('click', event => {
	let source_image = el.getBoundingClientRect();
	
	let preview_close = document.createElement('div');
  preview_close.className = 'image_close';

	document.body.append(preview_close);

	let preview_container = document.createElement('div');
  preview_container.className = 'preview_container';

	document.body.append(preview_container);

	let preview_image = document.createElement('img');
	preview_image.className = 'image_preview';
	preview_image.src = el.src;

  preview_container.append(preview_image);


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
			preview_image.remove();
			preview_container.remove();
			preview_close.remove();
		}, '150' );
		
		console.log('Image Preview Unloaded');
	});
}));
