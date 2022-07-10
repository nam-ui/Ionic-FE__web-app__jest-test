# 1.config test ionic : "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!(@ionic))/\"",
# 2. npm i --save-dev @types/babel__core  && 
# 3. config ts json 
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "types": ["jest", "node"]
  },
  "include": ["src"]
}

