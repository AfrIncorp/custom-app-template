module.exports = {
	// Type check TypeScript files
	"**/*.(ts|tsx)": () => "npx tsc --noEmit",

	// Lint then format TypeScript and JavaScript files
	"**/*.(ts|tsx|js)": (filenames) => [
		`npm run eslint --fix ${filenames.join(" ")}`,
		`npm run prettier --write ${filenames.join(" ")}`,
	],

	// Test TypeScript and JavaScript files
	"**/*.(test|spec).(ts|tsx|js)": () => [
		`npm run test --watchAll=false`,
	],

	// Format MarkDown and JSON
	"**/*.(md|json)": (filenames) => `npm run prettier --write ${filenames.join(" ")}`,
};
