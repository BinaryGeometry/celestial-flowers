<?php

/*
Plugin Name: Snowbotica Screensaver
Plugin URI: http://binarygeometry.co.uk/plugins/screensaver
Description: A WordPress plugin.
Version: 0.4.1
Author: Andrew MacKay
Author URI: http://whitespaceisdesign.com
License: GPL2
*/

define(SNWB_SCREENSAVER_DIR, plugin_dir_url( __FILE__ ));

class SNWB_Screensaver extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    function __construct() {
        parent::__construct(
            'SNWB_Screensaver_widget', // Base ID
            esc_html__( 'SNWB Screensaver', 'SNWB' ), // Name
            array( 'description' => esc_html__( 'Not quite milkdrop', 'text_domain' ), ) // Args
        );
        $this::go();
    }

    private function go() {
		add_action( 'wp_enqueue_scripts', array($this, 'load_scripts' ));
    }
    /**
 	* Proper way to enqueue scripts and styles
	 */
	public function load_scripts() {
	    wp_enqueue_style('snwb-screensaver-styles', SNWB_SCREENSAVER_DIR . 'snwb-screensaver.css' );
	    wp_enqueue_script( 'd3_js', 'https://d3js.org/d3.v4.min.js', array(), NULL, true );
	    wp_enqueue_script( 'snwb-screensaver-js',SNWB_SCREENSAVER_DIR . '/snwb-screensaver.js', array('d3_js'), '1.0.0', true );
	}



    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
        //$opts = get_option( 'snwb_settings' );
        ?>
        <!-- <img src="<?php //echo $opts['snwb_blog_welcome_image'];?>"/> -->
        <section class="snwb-widget snwb-screensaver">
            <main id="container" style="width:100%;max-width:500px;margin:0 auto;border:1px solid #f7f4f0;">

			</main>
        </section>
        <?php
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    // public function form( $instance ) {
        /*
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'New title', 'text_domain' );
        ?>
        <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'text_domain' ); ?></label> 
        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <?php 
    	*/
    // }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    // public function update( $new_instance, $old_instance ) {
    	/*
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

        return $instance;
        */
    // }

} 
// This sample widget can then be registered in the 'widgets_init' hook:

add_action( 'widgets_init', function(){
	register_widget( 'SNWB_Screensaver' );
});

function snwb_screensaver_queue_widgets_init() {

    register_sidebar( array(
        'name'          => 'Screensaver Queue',
        'id'            => 'snwb_screensaver_queue',
        'before_widget' => '<section class="snwb-blog-widget">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="sect-title" >',
        'after_title'   => '</h2>',
    ) );

}
add_action( 'widgets_init', 'snwb_screensaver_queue_widgets_init' );


/**
 * Add a widget to the dashboard.
 *
 * This function is hooked into the 'wp_dashboard_setup' action below.
 */
function snwb_add_dashboard_widgets() {

    wp_add_dashboard_widget(
                 'snwb-screensaver-queue',     // Widget slug.
                 'Screensaver Widgets',       // Title.
                 'snwb_screensaver_queue' // Display function.
        );  
}
add_action( 'wp_dashboard_setup', 'snwb_add_dashboard_widgets' );

/**
 * Create the function to output the contents of our Dashboard Widget.
 */
function snwb_dashboard_widget_function() {

    // Display whatever it is you want to show.
    echo "<h1>Learning outcomes: HTML5 Canvas, Geometry.</h1>";
}


