Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	
	// Embedded data names: to be updated for each question
	var pleasure = 'Pleasure';
	var dominance = 'Dominance';
	var arousal = 'Arousal';
	
	// @return the value of the inputId
	function getInputValue(inputId) {
		v =  jQuery(inputId).val();
		if (v) {
			return v;
		} else {
			return 	0;
		}
	}
	
	// Updates embedded data on change
	function updateAffectData() {
		Qualtrics.SurveyEngine.setEmbeddedData(pleasure, getInputValue('#pleasure'));
		Qualtrics.SurveyEngine.setEmbeddedData(dominance, getInputValue('#dominance'));
		Qualtrics.SurveyEngine.setEmbeddedData(arousal, getInputValue('#arousal'));
	}
	
	function onInputChange(inputId, dataName) {
		jQuery(inputId).off('input').on('input', function() {
			var v = jQuery(this).val();
			if (v) {
				jQuery('#affect').affectbutton('affect', this.id, v);
                // Update the corresponding qualtrics data
				Qualtrics.SurveyEngine.setEmbeddedData(dataName, v);
			}
		});
	}
	
	function onAffectChange() {
		jQuery('#affect').affectbutton({
		}).off('affectchanged').on('affectchanged', function(e, a) {
			// to update the input element of each component
			jQuery.each(a, function(c, v) {
				jQuery('#' + c).val(v);
			});
            // Update the corresponding qualtrics data
			updateAffectData();
		});
	}
	
	onAffectChange();
	
	onInputChange('#pleasure', pleasure);
	onInputChange('#dominance', dominance);
	onInputChange('#arousal', arousal);
	
    // Reset button
	jQuery('#resetButton').on('click', function() {
		jQuery('#affect').affectbutton('reset');
	});
	
	// Prevent scrolling when inside the canvas (for touch events)
	jQuery("#affect").on("touchstart", function(e) {
		//e.preventDefault();
		document.documentElement.style.overflow = 'hidden';
	});
	
	jQuery("#affect").on("touchend", function(e) {
		document.documentElement.style.overflow = 'auto';
	});
	
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

    // This is needed when we have multiple AffectButtons
	jQuery('#maincontent').remove();

});