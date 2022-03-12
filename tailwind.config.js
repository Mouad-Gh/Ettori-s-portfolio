module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        dalek : ['Dalek'],
        pinpoint : ['Dalek Pinpoint','Poppins'],
        greek: ['greek to me'],
        azonix : ['azonix']
      },
      colors: {
        bleu : '#111F4D',
        noir : '#020205',
        orange: '#E43A19'
      },
      cursor: {
        'pen': 'url(pen.png), pointer',
      },
      backgroundImage: {
        'illustrations': "url('../public/images/DIGITAL_ART_BG.png')",
      },
      keyframes:{
        move:{
          '0%': {transform : 'translateX(-24%)'},
          '100%' : {transform : 'translateX(-6%)'},

        }
      },
      animation: {
        move: 'move 10s linear infinite',
      },
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(250px,1fr))',
        'fitsm': 'repeat(auto-fit, minmax(195px,1fr))',
      },
    },
  },
  plugins: [],
}
