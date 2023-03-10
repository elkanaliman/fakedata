const express = require('express')
const router = express.Router()

const productData = [

{
    _id:11,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 140,
    category: "Women",
    image: "https://imgs.search.brave.com/Z3Bub1ncdMaaqs_QJoAWB7qMld7yaDMeezf443WDZys/rs:fit:351:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/NjhlZnFJTHlyX3g5/Z0ZabVhQdmF3SGFK/XyZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:12,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 200,
    category: "Women",
    image: "https://imgs.search.brave.com/XgMA-ib9Zd8DwBfmK_LLPAXE11x3Bo0zthvtaupOk6E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/bEVrcTFQQlFvX2tE/RmZ5c2I2WEtBSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:13,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 240,
    category: "Women",
    image: "https://imgs.search.brave.com/eLwZBPf1lvepnmxwqh3yK18GjcnpJSN6SROWyrO7c30/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/WUFjWlRJTFBsM3ZG/cmJzWkFWWXN3SGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:14,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 270,
    category: "Women",
    image: "https://imgs.search.brave.com/wPd_N9ot1oDP8tHoJx4_8CChK71zg9mmCWmkU4TYuwc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/LVRjb2dTbTlXVHcy/bks3ZFAtRkx3SGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:15,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 280,
    category: "Women",
    image: "https://imgs.search.brave.com/3VotiUhB_yjaInjPEJAnpIQSGPrN7ompXZ539clghj4/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5tS080TzBr/aW02bl9Gb0ZuMGJ1/MlJ3QUFBQSZwaWQ9/QXBp",
    ratings:4,
   
},

{
    _id:16,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 210,
    category: "Women",
    image: "https://imgs.search.brave.com/7kB2s8U8DKALMPYu0qAsLfH2z67vSwdX120tR3aU6ZY/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/WWtIb0RUNG5KbnY3/WGdNM0lmUl9nSGFM/SCZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:17,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 220,
    category: "Women",
    image: "https://imgs.search.brave.com/JeOp-dNvh09PmRThMva0TKxIQD2xiPVFPgFl3RVwYFc/rs:fit:366:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/Uk1laldQQ3E1cW9N/WmNNSEl3TUt3SGFK/bCZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:18,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 230,
    category: "Women",
    image: "https://imgs.search.brave.com/UV8WXNpZjtkH4oh2OWW-ZW5B9cQiySUteVPJ_Ih1-u8/rs:fit:244:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/dzMzcHJRQW9Dbkh2/Xzh5dExyLS1nSGFP/WCZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:19,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 310,
    category: "Women",
    image: "https://imgs.search.brave.com/oROEblz1ryQrtiqZ54pVokv3jDBoyCv8_Ww4YeR0akA/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/a3dkZF9kRDduQVFi/N0NPLUROVHF3SGFF/OCZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:20,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price:320,
    category: "Women",
    image: "https://imgs.search.brave.com/BGbI3jr0aJP2hovFZvI3rYPVKZ0QJeNVOG86T_GxMlg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/dVd2dU5GVFI0VjhQ/UGJZTXZVMlBRSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:21,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 370,
    category: "Women",
    image: "https://imgs.search.brave.com/rIZHCf4J8XLqyRC2R-pNl1Yg4WnjdV47qo1rmTlzmXs/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/emZVSkViMmpocjF4/c2lqYVdSOGZ3SGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:22,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 170,
    category: "Women",
    image: "https://imgs.search.brave.com/cDqKAXElKcN3TXO8Pqx77EcFjSSjPXUdCWP9J0NptlI/rs:fit:656:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/UUVDeHBsaDdKMEJx/NVMwV2NTNGNnSGFG/VyZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:23,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 200,
    category: "Women",
    image: "https://imgs.search.brave.com/qISkHP60GczEG6xvg4QjU7Bp6gx0IIYo7e4Ftgfi6b4/rs:fit:364:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/LXUyOEZ3Sk5taHhU/cU5uWHlJNUVRSGFK/byZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:24,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 280,
    category: "Women",
    image: "https://imgs.search.brave.com/zFfTc8dXohMAS8qI7Z5WN7t_lrknaUJYrzSQ1VF1Wyw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/aVhhdXlNZWtXbmhM/UG4wTkhRNDNnSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:25,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Marvel Future Fight",
    price: 210,
    category: "Women",
    image: "https://imgs.search.brave.com/ZW4wFeLjddexUSz1InbcFDAyZUrBsV_fb74ZUNMLm7E/rs:fit:491:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/UVVRcEM2SmNnX1VR/bnFxc1YyLTN3SGFI/SiZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:31,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 220,
    category: "men",
    image: "https://imgs.search.brave.com/M5EAZpNmrBJv0PPvwsEjTnve_Fj1QL9hf-irhfgSLag/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/bEcyUExDblZpTFhN/N0t0NkNDNVNRSGFF/byZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:32,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 230,
    category: "men",
    image: "https://imgs.search.brave.com/Z3xOBC-czQPYiMBumeDmJpgz4DpZWEKy76XhsIb_JRo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/endPMW9zNUVSNEpL/LWQ3enpDZWtRSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:33,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 310,
    category: "men",
    image: "https://imgs.search.brave.com/7X9oIG1bbF99SSMJWCNQ5mE7XUESEmV9tdyDNFpVAO0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/UVpMMEY0UzB0MGo4/MnZtdUJJZXVBSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:34,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 320,
    category: "men",
    image: "https://imgs.search.brave.com/79V1gKGo79wYjlL4heSCTEcseZnqrGc1r_Rt97CE6TU/rs:fit:214:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/LXg3Ni05Z3N0Y1Bj/U2lIeE1yeTR3QUFB/QSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:35,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 370,
    category: "men",
    image: "https://imgs.search.brave.com/5vlAcJcvQ1p6r-IVEjSZaJU3qjWY-pa7WQxDYfCb6lw/rs:fit:877:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/THdVSW5xYVF4UmFs/SXRmVkpIMmx3SGFF/QSZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:36,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 270,
    category: "men",
    image: "https://imgs.search.brave.com/HefU_CVCQKl0hgPiKZsilqQhoNsAmrJ-9hoFyVSYYFk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aFdpcllKRGlGZE1F/aDR1VUVkQTdnSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:37,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 280,
    category: "men",
    image: "https://imgs.search.brave.com/mh6_hY08gxpA-8rbfYm03DC3xIfmv8zq-k8oGsMw0Gk/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/SDZkNGVfNTI4NF95/V0FsR0hQM0lRSGFG/aiZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:38,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 170,
    category: "men",
    image: "https://imgs.search.brave.com/jokJdGLJoXK5ZLcA5OzGV9aRklefW94LbxUd4CYiZqw/rs:fit:585:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/YXYxM1Z4akw2Yy1C/NXRWWEdMQ2tnSGFH/QSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:39,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 200,
    category: "men",
    image: "https://imgs.search.brave.com/viV4kCRi3I42lL7kE9k903Rrxl9h7WSPFoPFevoiMyU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/cjNyU2x3OGc5LXZN/T2F6WlVwSmhRSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:40,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 240,
    category: "men",
    image: "https://imgs.search.brave.com/goE5-UZr1RXlFJnUp_jdi5hLDuDL4gxfe5mhXx-X8UE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/R29kYThnWjBwSFp4/dzE0MC0xQnlBSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:41,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 270,
    category: "men",
    image: "https://imgs.search.brave.com/bKevImIcGjVmQFsYXSBt3PI10H2ZQOXsc2rvlu9w2-Y/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5Ub1JMT2lB/dENXS2RWOWZMWVY2/dWFRSGFMSCZwaWQ9/QXBp",
    ratings:4,
   
},



{
    _id:42,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 310,
    category: "men",
    image: "https://imgs.search.brave.com/HtalzL4vhj34uop98DkiCNawNHIedKhi23wi298pJFU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/akg3SHZLUDBqSHR6/dnctNUp0YzF3SGFF/OCZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:43,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 370,
    category: "men",
    image: "https://imgs.search.brave.com/q_J0C8X6udTXqVZu-V1ZBksGJuk-2jctcD-5t5VjIG8/rs:fit:375:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/VHFwdXY0WWJsUFNS/QU5DZ3ZNaWxRSGFK/VyZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:44,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 140,
    category: "men",
    image: "https://imgs.search.brave.com/zzS59MGITXWyAluJ2YH-szyI5wFwy3RFj-3nhnyS2UA/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/N1pVekFmS1NLaVhw/dklGVVZreVlBSGFF/byZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:45,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 270,
    category: "men",
    image: "https://imgs.search.brave.com/kSvi3u4oOLwsbzaEpcQA8xp03sh5Wc728qonrwTQkpE/rs:fit:378:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/OHBmZGpVbnE1LV8x/ZXl1SkRyWlF3QUFB/QSZwaWQ9QXBp",
    ratings:4,
   
},




{
    _id:46,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 270,
    category: "men",
    image: "https://imgs.search.brave.com/SWAbQLBdNAisoBdp-A-2xu0A33kk_Y6m-1P2SUUAEmo/rs:fit:261:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/bzJvQm8xSkZET1dM/QXppc0tqSjBRQUFB/QSZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:47,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 200,
    category: "men",
    image: "https://imgs.search.brave.com/7kB2s8U8DKALMPYu0qAsLfH2z67vSwdX120tR3aU6ZY/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/WWtIb0RUNG5KbnY3/WGdNM0lmUl9nSGFM/SCZwaWQ9QXBp",
    ratings:4,
   
},




{
    _id:48,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 210,
    category: "men",
    image: "https://imgs.search.brave.com/NBmyDR8_S3ULdAhO0voGM7ziJoSMvbFqGh1KyV1ZsLM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/dFZVMzlaWEp1dUlW/YWRMR1FJUVhBSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},




{
    _id:49,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 320,
    category: "men",
    image: "https://imgs.search.brave.com/_-scszLQyXcBN2bUAo4RIg8W-yUcIabtJg3BjOCXY94/rs:fit:481:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/a3RpaV9uLVZ6M3JC/UnpKZlpWYklRSGFI/VCZwaWQ9QXBp",
    ratings:4,
   
},




{
    _id:50,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 370,
    category: "men",
    image: "https://imgs.search.brave.com/cfN5JWSk4yGgzTujRH3_qmEBeQRyz_d-XmY1kzS5odw/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Qk1Yd0hTaEFpMnVN/WGFQNklYMmRnSGFF/NSZwaWQ9QXBp",
    ratings:4,
   
},




{
    _id:51,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 340,
    category: "men",
    image: "https://imgs.search.brave.com/SEWZOvGnaKL_QKb01qFz0RCd2RqlP7qB6jRQXbcg540/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/bkc3bU1CcW50OFpy/YUJJU1U2TFhnSGFG/aiZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:52,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Gaming Attire",
    price: 300,
    category: "men",
    image: "https://imgs.search.brave.com/HBwwDknlr-Yp7NdL7fsOkBV1-QkfD3yZ53cTPSJOADM/rs:fit:684:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/clZMNnJ1VWkxdURy/SVQ5S25CTVVRSGFG/SSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:61,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 400,
    category: "Electronics",
    image: "https://imgs.search.brave.com/f-lE1elJfL0Mb4KZV9k1-J5r04B994-zw4RMKtn8S08/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/dzZ4QW9td3VOdE1R/QlItRHZYY1VRSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:62,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 420,
    category: "Electronics",
    image: "https://imgs.search.brave.com/b1dx8akyOetUkiO19qN7RCqrfQS2rIqMMuvaOhDomo0/rs:fit:913:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/ekd1cW5IbzliNDJ6/b2lrbmd2RGZ3SGFE/MiZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:63,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 472,
    category: "Electronics",
    image: "https://imgs.search.brave.com/DYdQSpRf8m9NxWeEHaUg5dDcaqDlCaPvZ9mUFLmOz7E/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/U2llRzR0MmdUbHdY/azh3QjJkd0VRSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:64,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 480,
    category: "Electronics",
    image: "https://imgs.search.brave.com/gZGj0us8H9imGsk1xK8s2x83ULIBX1Z_GBnjoqmgzUU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/bkYwbDRPanc0NEgw/QzVwcWlMWlVnSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:65,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 714,
    category: "Electronics",
    image: "https://imgs.search.brave.com/di2p7owvd5yw1Ge39mxo3Rs-BxsCqLqt7v5YB1EY53k/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/LWJFMU8xWGFlZVVi/YmNEamY3bzZnSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:66,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 410,
    category: "Electronics",
    image: "https://imgs.search.brave.com/Rf2jKx4U8QGK2eEszy4rouz_92BG-K__VTtgNELdGMQ/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/MzVsWkRNYlEyTTVQ/aGxCR25zdVVnRXlE/TSZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:67,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 324,
    category: "Electronics",
    image: "https://imgs.search.brave.com/j5obl8oWZ-lRjAyYjPfoIFvLmHvXJ-6zCg5u84MUei4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/SndrZG9QVkE0bnpE/YWJTWUIwX2xnSGFF/OCZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:68,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 742,
    category: "Electronics",
    image: "https://imgs.search.brave.com/v7C4lPFkLCkbxB2GRdyiLHsmHn9cKz5obg9GLbhdkl4/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/VnR0cTB3ZzVpenND/bmpzaUNFZk5nSGFF/NyZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:69,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 690,
    category: "Electronics",
    image: "https://imgs.search.brave.com/UidqHD4MNrleWqPw5Lrb2ft3DYnSIFQrViY4K9PkMEA/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/cUNac1YwWHUwcm5I/NkZYRG8xN3NnSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:70,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 380,
    category: "Electronics",
    image: "https://imgs.search.brave.com/xRIkTCd-0K1-9Hqn8BS0zUfedFSN4WEt99mvuc1f_vY/rs:fit:829:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/TGVIQWRnQ0F5TlVf/QkItMTBMd0ZnSGFF/UCZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:71,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 370,
    category: "Electronics",
    image: "https://imgs.search.brave.com/3mQqldUKfUm3chkkm3CAjvfuf1UoDHNchGB4KWHGgM0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/OGVhMTAxY2VpdlNt/UW4tWEdfeTlnSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:72,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 300,
    category: "Electronics",
    image: "https://imgs.search.brave.com/jFVTMCJt2RnRJe2tQyiEZTdTmO2CjvFDx8t8IqAuS9E/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/T1J6clRuNVFOR2Rz/RDZTT3lTRlpBSGFF/NiZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:73,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 340,
    category: "Electronics",
    image: "https://imgs.search.brave.com/v6Cl5EqUSOyZy5zkFlp5xOFsVUQ0tL69F4OU78tFJpE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/bEI1QTI3Y1Ntd3pn/aldhVjZVSkJnSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},

{
    _id:74,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 400,
    category: "Electronics",
    image: "https://imgs.search.brave.com/MsJt4OKVNZTTJHbOoEKUvDVMNqZBl_3Z92al1mgSfuw/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/R3RHRmR5dkt5cnJJ/MDlPN0hLdDJBSGFF/SyZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:75,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 472,
    category: "Electronics",
    image: "https://imgs.search.brave.com/6iifN0dIz4KaJgiRM5L281VTJWHJRZYp0Tn7EYa3ScE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/bHlnaERlNEdZTlh6/ZW5mOVJJd2xRSGFI/YSZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:76,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 878,
    category: "Electronics",
    image: "https://imgs.search.brave.com/9uywRC8PAbhqpTBflqhMMO4ENL60aZ1BqRMx0TXRbvg/rs:fit:647:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/M2J6R0NTSGhaREc1/bjBuWHgzR25nSGFG/YiZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:77,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 320,
    category: "Electronics",
    image: "https://imgs.search.brave.com/C1UH20_SWtWEPPLEQH7Oy--M1UvNBYfGqaLp7FCS7OU/rs:fit:531:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/bDRVNC1ZQ1lLTFJk/dmFnNHNEOXl3SGFH/biZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:78,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 400,
    category: "Electronics",
    image: "https://imgs.search.brave.com/jBKwB6ffnT-MZUx496j4YAaUlUA-5AiGBVlKsmj1Mj8/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/V09zeEdMWk8xTmRt/SE4ya21PZlVBSGFE/NCZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:79,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 437,
    category: "Electronics",
    image: "https://imgs.search.brave.com/5IVO5tWYRzalcllTzhYJvRMbxksw9qJrlk4fqGXwZ1c/rs:fit:989:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/cTZqd05MejREWDBD/WUwzUWRUSTRRSGFE/aiZwaWQ9QXBp",
    ratings:4,
   
},


{
    _id:80,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 420,
    category: "Electronics",
    image: "https://imgs.search.brave.com/HbvcilsFtdHh4orvINtltDMmbYDDrmP-sru2puvQHfc/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/cmZ0aTJONWtEcFF6/UDFYYzVoMjhnSGFE/NCZwaWQ9QXBp",
    ratings:4,
   
},



{
    _id:81,
    title:"products",
    isNew: false,
    oldPrice: "130",
    description:"Electronics",
    price: 440,
    category: "Electronics",
    image: "https://imgs.search.brave.com/_w3T-o6pjDqWBg4LtnMh0w1DoKOgIQYbQ32u_lnRyN4/rs:fit:664:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/RUxQX0k5TF9SSHha/SzZtMmVlQWpnSGFG/UyZwaWQ9QXBp",
    ratings:4,
   
},








]

router.get("/products", (req,res)=>{
    res.send(productData)
})

module.exports = router