const sections = [
  {
    title: 'Interview for 2025 A/L Batch',
    date: '26th June 2023',
    images: [
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/356644909_197171673102309_1546087726035513141_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGnHurY3vDTUhhHRjiH_fHV5WLw9RcdcODlYvD1Fx1w4AM6b31DaXCYRFEHwb1v5PDi73Guxa08oPFeaunge2Uw&_nc_ohc=d07G64qQihsQ7kNvgG0Qta1&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYB7KriQs3oyvFkNlUqrHBcOiPH7kvWDkIjNFssp3yB26w&oe=66551423', alt: 'Image 1' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/355700247_197171526435657_2847543419337015962_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE49KwbuFtTjVULdUGrULjj8d_HMdYgB3_x38cx1iAHf4Cb49KNyMtm5jGVl6ehk_nZad158cDKf1m4cxB1z7Xk&_nc_ohc=fi5mre8JBuQQ7kNvgHrNlOw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYAyY6ppgBO2w47OjTOBxytfF2Pq_qgif3NtpAIPI8aA8A&oe=6654F483', alt: 'Image 2' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/355893805_197171599768983_4453737314865794124_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRKsofn0dnXPiaSDm70H8XsZxeAnjzoX2xnF4CePOhfZXxUzK0rVbV3n_itJP2NFlP44Yxg0K-UFnP4xiVR2ph&_nc_ohc=Ucv4AcnGFMMQ7kNvgGWohrO&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBfP9dqKwecEBcAw257JymskWVH0Ec2Pxc3aOkSzH4CsQ&oe=6654ECE9', alt: 'Image 3' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/354468593_197171683102308_8811588807554693541_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeENJTcfo66-eSjMFtYR7LkV6BIArdcnAFvoEgCt1ycAW9F4v3C5E_Zu7ZFqk_5pX_ps_GajDI8YbHqN-FE8cMWq&_nc_ohc=rlOIxeI0HlIQ7kNvgE6JOi9&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYChCI9jwRKnDFBp8Wnqwm0c09R3Tki2RuwGoLRtcs_d_A&oe=6654F9B5', alt: 'Image 4' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/355876378_197171623102314_6651581899141801579_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEtc4sGy4eXXbhR-ttrKM7XAUM5YTHvVMsBQzlhMe9Uyzc8FW5l-PyaeZWhhOMIE7XzYXt6aaaWxqk8NcU8T3LQ&_nc_ohc=LH9Z1O4r3y8Q7kNvgEWxNI6&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCqdY2JsTHkDBU7YwQqAGdL_bj3NDOzIA-y5kwsQ2hDVA&oe=66550630', alt: 'Image 5' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/355667233_197171563102320_8311345055368926628_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHLit9EMosDBezGUi96-3tUvJjOLtM9_-W8mM4u0z3_5T5Bdl3hH8ap2AgIhSXNZCrudw52xcQxCjgBaOMvEpFU&_nc_ohc=ERP-dWFbytYQ7kNvgHXPlOC&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBOMdu7I-C7T6MZwHxAIDCriifchFmUR3FmgicNognXNw&oe=6654E478', alt: 'Image 6' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/356154679_197171639768979_7340079900776055378_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLkRIfsCZs-N-FAWz7zqjt2OqPVfUD7iLY6o9V9QPuIsoW1bQ20WwOMRrYIynueiVWdE_3_UkCGHTRRCt0QDAl&_nc_ohc=1qdqwEGwsOsQ7kNvgG3DFTR&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBAToFfCgLCD_hB6CllyvdkXUkR4nGzwzAQ0a6zz-81Mg&oe=6654FB6E', alt: 'Image 7' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/355688691_197171669768976_5871025197657158720_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFav2crjyrHGnHRCZrRpKrUqQhYA5VFsp6pCFgDlUWynj38K2o4jNZaK3prn8QZNPPb3KIQaWDGPHCTPkxZB3Dl&_nc_ohc=hrcEZoyAVCgQ7kNvgGFTDdB&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYAvn_tJePmwK-wipdN6KpmINmD-_EwjYIi9xJPSj_h8ow&oe=665506DF', alt: 'Image 8' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/356231203_197232516429558_7810722949334004999_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHfSLnIFoovag9O2DwUQMJAKzv8m_sjsDMrO_yb-yOwMx126v-oYokD4r9Xv14KmDBihGi6DgMu83I7bdWW5mTC&_nc_ohc=X1qHEFch4h0Q7kNvgGSVIr4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCowtOkWsPuIkkLtp5PGtJ0AvV8lYz1nTCwFLNrgO2HdA&oe=6654E7AD', alt: 'Image 9' },
      { src: ''},
    ],
  },
  {
    title: 'Farwell Function 2022 A/L Batch',
    date: '05th March 2023',
    images: [
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/330821773_1401785213927986_6995664996153333730_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEEwAKQ1L4qhe5zW13i09ZzIyFf8JsEA3YjIV_wmwQDdkLfKWtIR6ypKF3sBTVuNRp-ub1rbD1rUPIPeGcwjpJc&_nc_ohc=iBjvXBrwXOUQ7kNvgEzw8ve&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCiriNYGV9vDTh1b7ML_tIffYkuXiDw_oTqLRpIgsF1ZQ&oe=6654FD70', alt: 'Image 7' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/328928034_1560482251128736_7695391274135991503_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZ2GV8fUG_uWJJXtMQTu1AH8FsZLocicwfwWxkuhyJzG16LgOS0xtuMCc68TRJiLJlMvQ2ULDnpVC57PnuaviI&_nc_ohc=uoiV1SKkYugQ7kNvgH_zep4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBOIM0tvX0X1nqyEF-ewnTp3nOvTlc_iym4vsDCrCS2rA&oe=66550314', alt: 'Image 8' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/334974494_608361240644516_7505715291735558867_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETdJqFZaCHpO3q8em41Gc8EH7V2HafZjsQftXYdp9mOy4wOZul0zLZTDoAD5jLCAQH0N3ajF3BJ5SunCJmneWi&_nc_ohc=MbzN7nJItVwQ7kNvgEWmxXl&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYAGwG2msv5htJr4K6DSR2h4J4OLL5Xj810zawv699CGuA&oe=6655061A', alt: 'Image 9' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/333051905_959081875459079_14519666449932865_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFejyD9u780l1xvVArqpPiWNyEUv0lZyKs3IRS_SVnIq0B44VzDP_xYAo4kH5ZnABKv5yo2wnJzceDB_IWTkqY7&_nc_ohc=CgL_C_gpaaUQ7kNvgHPj83E&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCrMOyIiFyJciApcz9_sGwhJ1Of_RfV4tqe4MkWf8q6oA&oe=665519D3', alt: 'Image 10' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/334992444_747765566721639_2233024707205554366_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoYYVdfoCpRt6vFJ4jRZGRzkd865rNjGfOR3zrms2MZ9P1Q3l7f8oll2GxHIpRY4U2k5HhunrsyoUFKtwMwduu&_nc_ohc=-Gb61bKHo44Q7kNvgGmPIPk&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCFDW-LYFAYJS0tJbpgQLG0SROXt5FbiGZcMGarOGQsCg&oe=66551BD5', alt: 'Image 11' },
      { src: '', alt: 'Image 12' },
    ],
  },
  {
    title: 'Facilitation Ceremony 2021',
    date: '04th Jan 2023',
    images: [
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/323421322_571050187738166_6602308060905577934_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKgVLzSlyJ_bXd2jginNcSzrg51D2HMVnOuDnUPYcxWVnHX5voEWnIAIfneaCfAAAxq0CTDvT8f3Grqd15JUq9&_nc_ohc=kks3NdN5xroQ7kNvgGPdI3z&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYAdATzrjPEs27Nwgr0NFT1QiaN3vGWUoEv74ILFgqaOzA&oe=66550494', alt: 'Image 1' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/323461842_516325900316795_5896835795931762219_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkrSuJZcDLD2kGXeQFwTpc2LTy4Tpr_GjYtPLhOmv8aI4S1_1Yy2Sqa5fCnBYTsowWvfBM6248o-rD2phsLyuZ&_nc_ohc=nYxKqvIK434Q7kNvgEIxhM8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBLS_FS408RQhNVusV7UMMGqRY37VlQODy2aJwh7yIrqQ&oe=66551088', alt: 'Image 2' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/323416281_587804719842477_3704781545377311855_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFA7-wxH1SBxarbsJAN0PFyNXzakUESVZo1fNqRQRJVmvXE0lHR0WpvDXerX8vkIDrSjlBaAtD6ehwxSC2E2Jxl&_nc_ohc=vHTL1f033DQQ7kNvgGyHzYO&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYCjImBZcSVvlOIohfqYe82rqrZPQ1S7_8bN9qVQyzgCNg&oe=6654F6DF', alt: 'Image 3' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/323635132_1091378662260895_4200248196428501169_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTAJT6vw8lr7dMLz0xsAy7t8pl3pmjpr63ymXemaOmvtYWLWrBl_NvtXxKs3pkGwJpJ2zFzQ7PyIf01eQJURmF&_nc_ohc=jwKZp7WLLhMQ7kNvgE1j-ou&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYB-s-fc4GoMowgL05jdBvWyG74scetVsafxE0itsZd3Ow&oe=66550702', alt: 'Image 4' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/323629164_6357737764236506_3961810445577154715_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGAUNmY543b24YRLuovPy8jDFAaci4DQIIMUBpyLgNAgiUxaY3CCb-X23sr0zxhWdL9wpbdqBSnuQ_BuTYYaJjY&_nc_ohc=UP3ENzmLRhYQ7kNvgFszm3L&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBHXBdlE7rdLysk2C4qhA-r1it-YEQKyIgMuNMcbNVMZQ&oe=6654FF06', alt: 'Image 5' },
      { src: 'https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/323413736_1169388943946748_4342084053672730469_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJcAHyyQjkgcUli9W6aK1AlWDBhZ6GymeVYMGFnobKZ4_C6SNDYgLJvlD5hraXnIaZjOy3WLy3yKrmyNHj65YY&_nc_ohc=-WNqFRPMXjAQ7kNvgHPu6e5&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&oh=00_AYBEYlY8OGrPNZ9pRG5PyogCCGcOpLVIhP1kNtSQUfZe8g&oe=6654E5A0', alt: 'Image 6' },
    ],
  },
  // Add more sections as needed
];

export default sections;
