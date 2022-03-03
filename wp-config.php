<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
// define( 'DB_NAME', 'mycoolblog_1390' );
define( 'DB_NAME', 'williams_wptask' );

/** Database username */
// define( 'DB_USER', 'will' );
define( 'DB_USER', 'williams_wellingtons' );

/** Database password */
// define( 'DB_PASSWORD', 'maine' );
define( 'DB_PASSWORD', 'Piz_gloria' );
/** Database hostname */
// define( 'DB_HOST', '127.0.0.1:3306' );
define( 'DB_HOST', 'localhost' );

// define('WP_HOME','http://localhost:8080');

define('WP_HOME','https://wordpress.william-sears.netmatters-scs.co.uk' );

// define('WP_SITEURL','http://localhost:8080');

define('WP_SITEURL', 'https://wordpress.william-sears.netmatters-scs.co.uk' );

define( 'WP_MEMORY_LIMIT', '256M' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         't z%zOQ(<!rA[y!r0j7t_y,VBAb4CVPBOP/]^{]yKa3M;<QY99n?Iojz,<NYoXyh' );
define( 'SECURE_AUTH_KEY',  'K!H1!2ZyT/w)TvnrD:dH}~bHBh%O[],WB<`82t7KzK+bZswhCyqdklnBQ:Lk5<-y' );
define( 'LOGGED_IN_KEY',    'n%R3=L~GJJ} ApfdY}-=39a!/&xzZz@2V*fBS>?K}D>T&y@*Q]by]|mvENvJ{IBO' );
define( 'NONCE_KEY',        'k4wx+J|O8*@Hi)^Og)BEHM$nM?&=)9OikOq:%]0P}&OhsHE6Oe@-=Aq%)U,`Ze2H' );
define( 'AUTH_SALT',        'TQxm7cY7!~5WRd>!Xu bT@HzHE+@+HceloLqdRnA3Tesw3rdY:dB?4SY`ZGL_{wa' );
define( 'SECURE_AUTH_SALT', 'R9?c H>9kK~EW]0((no53SXp02A@L%eB&}MPN_?Zm6/$2XSRY85!):H)3A*xkx3K' );
define( 'LOGGED_IN_SALT',   'A<Ti]FZ`vQIew0(iWApR1~4Fg^9B0Y|DQ?x.Vxr~iF>`DXc[&)GHOGze !MzP:1a' );
define( 'NONCE_SALT',       '(+W=R>eMp+@,Xx$XOQ=(z@P)Zzf}Xa$-ei!dH5X:{lH W,?UTg.Zk_4!_28]g(U>' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
