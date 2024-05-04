// Coding Everyday: Make Upper Case
// March 28, 2024
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

// Solution #01 by norbekoff
function makeUpperCase(str) {
 
                                                                                                                                                                                                                                                                                                                 
//                           tttt                                              tttt                          UUUUUUUU     UUUUUUUU                                                                                       CCCCCCCCCCCCC                                                           ((((((  ))))))     
//                        ttt:::t                                           ttt:::t                          U::::::U     U::::::U                                                                                    CCC::::::::::::C                                                         ((::::::()::::::))   
//                        t:::::t                                           t:::::t                          U::::::U     U::::::U                                                                                  CC:::::::::::::::C                                                       ((:::::::(  ):::::::)) 
//                        t:::::t                                           t:::::t                          UU:::::U     U:::::UU                                                                                 C:::::CCCCCCCC::::C                                                      (:::::::((    )):::::::)
//     ssssssssss   ttttttt:::::ttttttt   rrrrr   rrrrrrrrr           ttttttt:::::ttttttt       ooooooooooo   U:::::U     U:::::Uppppp   ppppppppp   ppppp   ppppppppp       eeeeeeeeeeee    rrrrr   rrrrrrrrr    C:::::C       CCCCCC  aaaaaaaaaaaaa      ssssssssss       eeeeeeeeeeee    (::::::(        )::::::)
//   ss::::::::::s  t:::::::::::::::::t   r::::rrr:::::::::r          t:::::::::::::::::t     oo:::::::::::oo U:::::D     D:::::Up::::ppp:::::::::p  p::::ppp:::::::::p    ee::::::::::::ee  r::::rrr:::::::::r  C:::::C                a::::::::::::a   ss::::::::::s    ee::::::::::::ee  (:::::(          ):::::)
// ss:::::::::::::s t:::::::::::::::::t   r:::::::::::::::::r         t:::::::::::::::::t    o:::::::::::::::oU:::::D     D:::::Up:::::::::::::::::p p:::::::::::::::::p  e::::::eeeee:::::eer:::::::::::::::::r C:::::C                aaaaaaaaa:::::ass:::::::::::::s  e::::::eeeee:::::ee(:::::(          ):::::)
// s::::::ssss:::::stttttt:::::::tttttt   rr::::::rrrrr::::::r        tttttt:::::::tttttt    o:::::ooooo:::::oU:::::D     D:::::Upp::::::ppppp::::::ppp::::::ppppp::::::pe::::::e     e:::::err::::::rrrrr::::::rC:::::C                         a::::as::::::ssss:::::se::::::e     e:::::e(:::::(          ):::::)
//  s:::::s  ssssss       t:::::t          r:::::r     r:::::r              t:::::t          o::::o     o::::oU:::::D     D:::::U p:::::p     p:::::p p:::::p     p:::::pe:::::::eeeee::::::e r:::::r     r:::::rC:::::C                  aaaaaaa:::::a s:::::s  ssssss e:::::::eeeee::::::e(:::::(          ):::::)
//    s::::::s            t:::::t          r:::::r     rrrrrrr              t:::::t          o::::o     o::::oU:::::D     D:::::U p:::::p     p:::::p p:::::p     p:::::pe:::::::::::::::::e  r:::::r     rrrrrrrC:::::C                aa::::::::::::a   s::::::s      e:::::::::::::::::e (:::::(          ):::::)
/*       s::::::s         t:::::t          r:::::r                          t:::::t          o::::o     o::::oU:::::D     D:::::U p:::::p    */return str.toUpperCase()// ::::::eeeeeeeeeee   r:::::r            C:::::C               a::::aaaa::::::a      s::::::s   e::::::eeeeeeeeeee  (:::::(          ):::::)
// ssssss   s:::::s       t:::::t    ttttttr:::::r                          t:::::t    tttttto::::o     o::::oU::::::U   U::::::U p:::::p    p::::::p p:::::p    p::::::pe:::::::e            r:::::r             C:::::C       CCCCCCa::::a    a:::::assssss   s:::::s e:::::::e           (::::::(        )::::::)
// s:::::ssss::::::s      t::::::tttt:::::tr:::::r                          t::::::tttt:::::to:::::ooooo:::::oU:::::::UUU:::::::U p:::::ppppp:::::::p p:::::ppppp:::::::pe::::::::e           r:::::r              C:::::CCCCCCCC::::Ca::::a    a:::::as:::::ssss::::::se::::::::e          (:::::::((    )):::::::)
// s::::::::::::::s       tt::::::::::::::tr:::::r             ......       tt::::::::::::::to:::::::::::::::o UU:::::::::::::UU  p::::::::::::::::p  p::::::::::::::::p  e::::::::eeeeeeee   r:::::r               CC:::::::::::::::Ca:::::aaaa::::::as::::::::::::::s  e::::::::eeeeeeee   ((:::::::(  ):::::::)) 
//  s:::::::::::ss          tt:::::::::::ttr:::::r             .::::.         tt:::::::::::tt oo:::::::::::oo    UU:::::::::UU    p::::::::::::::pp   p::::::::::::::pp    ee:::::::::::::e   r:::::r                 CCC::::::::::::C a::::::::::aa:::as:::::::::::ss    ee:::::::::::::e     ((::::::()::::::)    
//   sssssssssss              ttttttttttt  rrrrrrr             ......           ttttttttttt     ooooooooooo        UUUUUUUUU      p::::::pppppppp     p::::::pppppppp        eeeeeeeeeeeeee   rrrrrrr                    CCCCCCCCCCCCC  aaaaaaaaaa  aaaa sssssssssss        eeeeeeeeeeeeee       ((((((  ))))))     
//                                                                                                                                p:::::p             p:::::p                                                                                                                                                       
//                                                                                                                                p:::::p             p:::::p                                                                                                                                                       
//                                                                                                                               p:::::::p           p:::::::p                                                                                                                                                      
//                                                                                                                               p:::::::p           p:::::::p                                                                                                                                                      
//                                                                                                                               p:::::::p           p:::::::p                                                                                                                                                      
//                                                                                                                               ppppppppp           ppppppppp                                                                                                                                                      

  
}

// Solution #02 
const makeUpperCase = (n) => n.toUpperCase();

// test: should return "HELLO"
console.log((makeUpperCase("hello")))