import { config } from "config/gluestack-ui.config";

/**
 *
 * @param tokenScale Type of the token ex: colors, spacing, fontSizes, etc
 * @param token Token name ex: red500, 1, sm, etc
 * @returns
 */
export const appToken = (tokenScale: string, token: string) => {
const themeTokens = config.tokens;
// @ts-ignore
 return themeTokens[tokenScale][token]
};