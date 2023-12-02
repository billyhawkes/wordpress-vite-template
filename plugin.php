<?php

/**
 * Plugin Name: Template
 * Description: Template for integrating WP plugin with React
 * Version: 0.0.1
 * Author: Billy
 * Author URI: billyhawkes.com
 */


add_action('admin_menu', 'init_menu');

function init_menu()
{
	// Menu page settings can be changed here
	add_menu_page('Template', 'Template', 'manage_options', 'template', 'template_admin_page', 'dashicons-admin-post', '2.1');
}

function template_admin_page()
{
	// Inclue React app entry point
	require_once plugin_dir_path(__FILE__) . 'entry.php';
}

// Enqueue scripts and styles
add_action('admin_enqueue_scripts', 'enqueue_scripts');

function enqueue_scripts()
{
	wp_enqueue_style('template-style', plugin_dir_url(__FILE__) . 'menu/dist/assets/index.css');
	wp_enqueue_script('template-script', plugin_dir_url(__FILE__) . 'menu/dist/assets/index.js', array('wp-element'), '1.0.0', true);

	// Pass WP REST API url and nonce to JS (Nonce is required for authenticated requests)
	wp_localize_script('template-script', 'wpApiSettings', array(
		'root' => esc_url_raw(rest_url()),
		'nonce' => wp_create_nonce('wp_rest')
	));
}
