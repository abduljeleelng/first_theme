<?php 

// function firsttheme_assets() {
//     // wp_enqueue_style('firsttheme-stylesheet', get_template_directory_uri().'/dist/assets/css/bundle.css', array(), 'all');
//     echo "hekkke";
// }

// add_action( 'wp_enqueue_scripts','firsttheme_assets')

function firsttheme_assets(){
    wp_enqueue_style('firsttheme-stylesheet', get_template_directory_uri().'/dist/assets/css/bundle.css', array(), 'all');
};
function firsttheme_admin_assets(){
    wp_enqueue_style('firsttheme-admin-stylesheet', get_template_directory_uri().'/dist/assets/css/admin.css', array(), '1.0.0', 'all');
};

add_action( 'wp_enqueue_scripts','firsttheme_assets');
add_action( 'admin__enqueue_scripts','firsttheme_admin_assets');


