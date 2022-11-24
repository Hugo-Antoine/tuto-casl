import { AbilityBuilder, createMongoAbility } from "@casl/ability";

export default function defineRulesFor(user) {
  const { can, rules } = new AbilityBuilder(createMongoAbility);

  if (user.role === "admin") {
    can("manage", "all");
  } else if (user.role === "chef") {
    can("read", "Post");
    can("create", "Post");
    can(["update", "delete"], "EDT", { authorId: user.id });
    can(["read", "create"], "EDT");
  } else if (user.role === "tech") {
    can("read", "Post", { authorId: user.id });
  }

  return rules;
}

export function buildAbilityFor(user) {
  return new createMongoAbility(defineRulesFor(user), {
    detectSubjectType: (object) => object.__type,
  });
}
