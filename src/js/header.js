<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script type="text/javascript" src="https://ii.tudelft.nl/~joostb/js/jquery.ui.affectbutton.js"></script>
<script>
	jQuery.widget( 'ui.affectbutton', jQuery.ui.affectbutton, {
		options: {
			isAffectSelected:	false,
			selectedState: {
				pleasure: 		0,
				arousal: 		0,
				dominance: 		0,
				mouseX: 		0,
				mouseY: 		0
			}
		},

		reset: function() {
			this._super();
			this.updateSelectedState();
			this.element.trigger('affectchanged', [this.affect()]);
		},

		revert: function(e) {
			if (this.selectedState) {
				this.mouseX = this.selectedState.mouseX;
				this.mouseY = this.selectedState.mouseY;
				this.affect({
					pleasure: this.selectedState.pleasure,
					arousal: this.selectedState.arousal,
					dominance: this.selectedState.dominance
				});
			} else {
				this.reset();
			};
		},

		updateSelectedState() {
			this.selectedState = {
				pleasure: this.state.pleasure,
				arousal: this.state.arousal,
				dominance: this.state.dominance,
				mouseX: this.mouseX,
				mouseY: this.mouseY
			};
		},

		_eventMap: function() {
			var thiz = this;
			return {
				'selectstart': false,
				'mouseenter': function(e) {
					thiz.down = false;
					thiz.clicked=false;
					return false;
				},
				'mouseleave': function(e) {
					thiz.down = false;
					if (!thiz.isAffectSelected) {
						thiz.revert();
					}
					thiz.isAffectSelected = false;
					thiz.clicked=false;
					return false;
				},
				'mousedown': function(e) {
					thiz.down = true;
					thiz.clicked=false;
					thiz._doMouse(e);
					return false;
				},
				'mousemove': function(e) {
					thiz.clicked=false;
					if (!thiz.isAffectSelected) {
						thiz._doMouse(e);
					}
					return false;
				},
				'mouseup': function(e) {
					if (thiz.down) thiz.clicked=true;
					thiz.down = false;
					thiz._doMouse(e);
					thiz.isAffectSelected = true;
					thiz.updateSelectedState();
					return false;
				}
			};
		},
	});
</script>
<script type="text/javascript"  src="https://ii.tudelft.nl/~joostb/js/jquery.ui.affectbutton.mobile.js"></script>

<link rel="stylesheet" href="https://raw.githubusercontent.com/ES-TUDelft/affectbutton-qualtrics/master/src/css/custom.css" />