<?php

function firsttheme_post_meta(){
    ?>
      posted on <a href="<?php echo  esc_url(get_permalink()) ?>">
                <time datetime="<?php echo esc_attr(get_the_date('c')) ; ?>"><?php echo get_the_date('l, F j, Y'); ?> </time>
             </a>
               By <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')) ?>">
             <?php echo esc_html(get_the_author() ) ?> 
           </a>
    <?php
}

function firsttheme_readmore_link(){
  ?>
  <a href="<?php echo get_the_permalink(); ?>" title="<?php the_title_attribute(); ?>" > 
   Read More  <span class="u-screen-reader-text">  About <?php the_title()  ?> </span>
 </a>
<?php
}


