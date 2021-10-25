<?php get_header(); ?>
<?php 
    if(have_posts()){
        while(have_posts()){
            the_post();
            ?>
            <h2>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> <?php the_title(); ?> </a>
            </h2>
            <div>
                posted on <a href="<?php echo get_permalink() ?>">
                <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date('l, F j, Y'); ?> </time>
             </a>
             By <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')) ?>">
             <?php echo get_the_author() ?> 
            </a>
            </div>
            <div>
                <?php  the_excerpt(); ?>
            </div>
            <a href="<?php echo get_the_permalink(); ?>" title="<?php the_title_attribute(); ?>" > 
             Read More  <span class="u-screen-reader-text">  About <?php the_title()  ?> </span>
            </a>
        <?php
        }
        the_posts_pagination();
    }else{
        echo "<p> No post to request for ";
    }

?>
<?php get_footer(); ?>
