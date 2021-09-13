import React from "react";

import {motion} from 'framer-motion'
const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration : 1 }
    },
  }
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 5,
        ease: "easeInOut",
      }
    }
  };
function Logo() {
  return (
    <>
      <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 860.000000 834.000000"
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        animate="visible"
      >
        <g
          transform="translate(0.000000,834.000000) scale(0.100000,-0.100000)"
          stroke="#f1faee"
        >
          <motion.path
          variants={pathVariants}
            d="M5675 7844 c-9 -21 -25 -58 -36 -81 -10 -24 -19 -45 -19 -47 0 -2
-19 -37 -41 -78 -153 -271 -335 -463 -573 -606 -79 -47 -115 -56 -64 -15 94
75 201 196 265 298 79 125 173 365 202 513 9 43 -2 55 -26 31 -42 -42 -313
-61 -488 -34 -146 22 -748 32 -961 16 -514 -40 -921 -159 -1229 -360 -88 -58
-111 -77 -211 -176 -89 -89 -146 -170 -203 -290 -48 -100 -84 -249 -76 -313
16 -126 31 -183 67 -254 21 -43 34 -78 28 -78 -5 0 -46 36 -90 80 -44 44 -82
80 -83 80 -4 0 -17 -29 -65 -150 -82 -208 -134 -627 -136 -1095 -1 -275 -2
-262 58 -535 52 -234 74 -321 196 -780 24 -90 79 -286 96 -340 13 -43 14 -42
9 55 -14 290 -17 685 -6 770 13 92 60 298 86 370 10 28 15 107 19 270 3 172
10 260 26 350 39 225 110 385 198 451 20 15 39 29 41 30 2 2 -13 29 -32 61
-51 84 -69 131 -57 152 8 17 17 15 118 -19 176 -61 360 -92 272 -46 -119 63
-330 286 -271 286 6 0 12 -4 16 -9 6 -10 93 -71 101 -71 2 0 21 -10 42 -23
130 -81 402 -175 532 -184 l85 -6 -42 45 c-44 49 -83 116 -83 144 0 12 15 3
47 -30 85 -83 216 -137 538 -221 251 -66 295 -81 329 -114 l31 -29 85 13 c223
37 466 171 582 321 56 73 78 98 78 92 0 -11 -108 -292 -135 -352 -14 -32 -25
-60 -23 -61 2 -2 44 17 93 41 152 73 382 135 615 164 205 25 305 57 389 122
29 22 37 18 21 -11 -9 -17 -8 -21 6 -21 13 0 15 -7 9 -42 -8 -48 -37 -128 -62
-172 -14 -25 -14 -31 -2 -34 27 -8 111 -106 139 -162 75 -151 110 -345 120
-665 5 -181 10 -239 23 -270 25 -59 74 -266 88 -370 11 -86 8 -541 -6 -780
l-6 -90 24 80 c22 72 38 128 107 380 102 370 209 831 231 993 13 103 8 442
-11 637 -17 175 -57 440 -85 560 -64 273 -162 452 -305 561 -30 23 -53 49 -56
64 -22 99 -62 218 -98 290 -39 79 -113 191 -135 204 -5 3 -22 -15 -37 -41 -34
-60 -125 -182 -154 -208 -23 -20 -23 -20 -17 0 44 144 50 325 17 495 -20 105
-65 257 -81 274 -5 6 -15 -7 -24 -30z"
          />
          <motion.path
          variants={pathVariants}
            d="M2949 4407 c-146 -88 -210 -132 -239 -162 -30 -32 -28 -32 159 1 203
36 251 33 756 -52 83 -13 170 -29 195 -35 67 -15 147 -16 161 -2 9 9 6 22 -14
55 -24 40 -82 108 -93 108 -2 0 5 -18 16 -41 12 -23 19 -43 17 -45 -3 -3 -27
22 -53 55 -27 33 -58 63 -69 66 -11 2 -108 18 -215 35 -165 25 -271 42 -485
75 -24 4 -52 -8 -136 -58z"
          />
          <motion.path
          variants={pathVariants}
            d="M5445 4455 c-44 -7 -156 -25 -250 -39 -288 -45 -395 -62 -398 -67
-27 -36 -101 -118 -104 -115 -2 2 5 23 17 46 35 68 -26 14 -77 -69 -29 -45
-28 -49 1 -61 24 -9 63 -5 226 24 579 102 664 109 871 72 187 -33 189 -33 159
-1 -39 41 -332 226 -355 224 -5 -1 -46 -7 -90 -14z"
          />
          <motion.path
          variants={pathVariants}
            d="M3125 4079 c-174 -24 -529 -106 -615 -141 -33 -14 -34 -16 -31 -64 2
-38 9 -56 31 -79 24 -25 30 -44 40 -115 26 -192 59 -308 115 -410 30 -53 143
-162 205 -197 158 -89 385 -123 586 -88 265 46 501 229 609 470 31 69 65 232
65 309 0 74 23 101 97 116 97 21 208 -3 233 -49 5 -11 10 -42 10 -70 0 -74 35
-238 64 -304 85 -189 227 -327 429 -415 245 -108 568 -90 788 43 60 37 152
130 184 185 56 100 93 232 116 415 9 68 15 85 41 112 23 24 31 42 33 78 3 45
2 47 -32 61 -94 40 -437 118 -632 144 -275 38 -485 23 -721 -50 -171 -52 -186
-54 -321 -34 -113 17 -125 17 -238 0 -135 -20 -150 -18 -321 34 -69 22 -168
46 -220 55 -126 20 -350 18 -515 -6z m470 -50 c233 -28 381 -124 414 -269 13
-57 13 -172 0 -229 -43 -189 -223 -369 -453 -456 -210 -79 -528 -42 -691 80
-126 95 -187 211 -215 409 -21 145 54 294 189 373 71 42 224 77 421 96 80 8
251 6 335 -4z m1895 -13 c239 -39 362 -108 424 -241 51 -106 53 -162 14 -320
-60 -246 -235 -384 -523 -415 -190 -21 -339 9 -493 99 -166 97 -288 245 -321
392 -13 57 -13 172 0 229 32 141 178 239 399 269 95 13 388 5 500 -13z"
          />
          <motion.path
          variants={pathVariants}
            d="M4048 2309 c-99 -15 -402 -125 -593 -214 -104 -49 -153 -96 -192
-184 -24 -52 -45 -191 -29 -191 3 0 24 18 46 40 79 79 199 141 323 166 40 8
190 21 334 29 227 12 269 17 312 36 l51 21 51 -21 c43 -19 85 -24 312 -36 144
-8 294 -21 333 -29 128 -26 243 -85 326 -168 21 -21 40 -38 43 -38 3 0 5 24 5
53 -1 74 -37 168 -89 228 -56 65 -131 102 -466 229 -155 58 -250 82 -331 81
-45 0 -103 -6 -129 -12 -35 -9 -63 -9 -113 -1 -99 17 -142 19 -194 11z"
          />
          <motion.path
          variants={pathVariants}
            d="M3800 1598 c0 -36 120 -193 169 -221 36 -21 36 -20 15 33 -9 23 -14
43 -12 46 3 2 41 -34 86 -80 94 -98 108 -132 97 -236 -14 -136 -108 -289 -214
-349 l-42 -23 21 42 c12 23 19 44 17 47 -3 2 -24 -6 -47 -19 -95 -52 -117 -61
-156 -65 -65 -8 -133 33 -249 151 -76 76 -250 275 -312 355 -2 2 -5 2 -7 0 -4
-4 37 -79 114 -206 19 -32 37 -62 39 -67 11 -27 149 -224 199 -285 104 -127
212 -192 397 -237 208 -51 563 -50 774 1 193 47 308 121 422 270 57 75 183
264 215 325 14 25 45 79 69 120 24 41 42 77 39 79 -2 2 -5 2 -7 0 -158 -205
-389 -445 -466 -484 -80 -40 -109 -35 -251 43 -23 13 -44 21 -47 19 -2 -3 5
-24 17 -47 l21 -42 -42 23 c-99 56 -188 194 -209 323 -20 128 0 176 129 301
54 52 61 50 35 -10 -8 -20 -13 -39 -11 -41 2 -2 22 9 44 25 59 42 168 200 151
217 -3 3 -23 -2 -43 -10 -59 -25 -245 -40 -358 -29 -57 5 -133 5 -180 0 -133
-14 -309 3 -399 38 -12 5 -18 2 -18 -7z"
          />
        </g>
      </motion.svg>
    </>
  );
}

export default Logo;
