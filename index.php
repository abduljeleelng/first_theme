<?php get_header(); ?>
<?php 
//  $custom = new WP_Query();
//     echo "<pre>";
//     var_dump($custom);
//  echo "</pre>";

?>
<?php 
   
    if(have_posts()){
        while(have_posts()){
            the_post();
            ?>
            <h2>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> <?php the_title(); ?> </a>
            </h2>
            <div>
              <?php firsttheme_post_meta() ?>
            </div>
            <div>
                <?php  the_excerpt(); ?>
            </div>
        <?php
         firsttheme_readmore_link();
        }
        the_posts_pagination();
    }else{
        echo "<p> No post to request for ";
    }

?>
<?php get_footer(); ?>
