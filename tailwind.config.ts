import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{ink:'#123047',teal:'#0c8b86',mist:'#f3f8f8'}}}, plugins:[require('@tailwindcss/typography')] } satisfies Config;
