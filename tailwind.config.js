/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        17: '4.25rem',
        21: '5.5rem',
        28.5: '7.125rem',
        100: '25rem',
        106: '26.5rem',
      },

      screens: {
        '3xl': '1920px',
      },

      backgroundImage: {
        profileBanner: `url('https://yt3.ggpht.com/0WAQ4TjrA9JfhzpP8-GPgnI1IJfDXiQ4qSCkCTrssY6wKvPYsgD0u0S80XhA3aHPVKZoz5UJcXE=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')`,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
