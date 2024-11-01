<div class="loan-calculator-styles-namespace">
	<p>
		<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', $widget_slug); ?></label> 
		<input class="full" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />
	</p>
</div>