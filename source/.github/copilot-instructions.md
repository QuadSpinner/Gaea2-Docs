# GitHub Copilot Instructions for Gaea Node Documentation

## Purpose
You are assisting with the documentation of Gaea node configuration files in JSON format. Your goal is to provide clear, concise, and complete descriptions for all parameters and options, following the conventions and terminology used in Gaea.

## Instructions

1. **Documentation Completion**
   - For each JSON file representing a Gaea node, ensure every parameter (`Name`) and option (`Flubs`) has a meaningful `Description`.
   - If a description is missing or incomplete, infer its purpose and effect based on existing knowledge of Gaea nodes, terrain generation, and standard terminology.
   - Do not search the internet for information; rely on your internal knowledge and context provided in the project.
   - Search the rest of the solution, especially if there is a markdown document of the same name, and use it for reference.

2. **Style and Clarity**
   - Use clear, concise language suitable for technical documentation.
   - Match the style and terminology of existing descriptions in the project.
   - Avoid placeholder text such as `<desc>`; always provide a complete and informative description.

3. **Formatting**
   - Preserve the JSON structure and formatting of the original files.
   - Only modify the `Description` fields as needed for completeness and clarity.

4. **Consistency**
   - Ensure descriptions are consistent across similar parameters and options in different files.
   - Use terminology that aligns with Gaea's node system and terrain generation concepts.

5. **No External Search**
   - Do not use external sources or search the internet for information.
   - Infer missing details using your knowledge of Gaea, terrain generation, and the context provided in the project files.

## Example

Given a parameter:

```json
{
  "Name": "example_parameter",
  "Flubs": {
    "option1": true,
    "option2": false
  }
}
```

You should complete it as:

```json
{
  "Name": "example_parameter",
  "Flubs": {
    "option1": true,
    "option2": false
  },
  "Description": "This parameter is an example used to demonstrate documentation completion. It has two options: option1 and option2. Option1 is currently set to true, and option2 is set to false."
}
```

## Output

- Your output should be a fully documented JSON file, ready for use in Gaea's documentation system.
- Only include the completed JSON content in your response.

---