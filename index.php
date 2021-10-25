<?php get_header(); ?>
<?php 
if(have_posts()){
    while(have_posts()){
        the_post();
        echo "<h2><a href='the_permalink()'> the_title() </a></h2>";
    }
}else{
    echo "<p> No post to request for ";
}

?>
<?php get_footer(); ?>
