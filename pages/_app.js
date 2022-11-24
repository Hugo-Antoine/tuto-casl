import "../styles/globals.css";
import { buildAbilityFor } from "../config/ability";
import { AbilityContext } from "../components/Can";

function MyApp({ Component, pageProps }) {
  const user = {
    id: 8,
    name: "hugo",
    role: "admin",
  };
  const ability = buildAbilityFor(user);
  return (
    <AbilityContext.Provider value={ability}>
      <Component {...pageProps} />
    </AbilityContext.Provider>
  );
}

export default MyApp;
