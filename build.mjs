import esbuild from 'esbuild'

export const options = {
    plugins: [],
    entryPoints: ['src/index.mts', 'src/migrations.mts', 'src/fixtures.mts'],
    outdir: 'dist',
    bundle: true,
    splitting: false,
    format: 'esm',
    platform: 'node',
    target: 'esnext',
    treeShaking: true,
    outExtension: { '.js': '.mjs' },
    tsconfig: 'tsconfig.json',
    external: ['pg', 'ajv'],
}


await esbuild.build(options)
