# KynicOS Governance for Downloads

Universal framework to audit and autocurate folder documentation.

## Scope
- Root: `C:\Users\QUINTANA\Downloads`
- Goal: ensure every directory has a governed `README.md`.
- Policy: strict, repeatable, non-destructive to manual README files.

## Engines
- Python (execution): `_KynicOS_Governance/scripts/kynicos_readme_auditor.py`
- TypeScript (mirror): `_KynicOS_Governance/scripts/kynicos_readme_auditor.ts`

## Strict Rules
- All directories must have `README.md`.
- Auto-managed readmes include marker `AUTO_MANAGED:KYNICOS_README_AUDITOR`.
- Manual readmes are preserved by default.
- Manual overwrite requires explicit `--force-manual`.

## Execute (Python)
```bat
cd /d C:\Users\QUINTANA\Downloads
python _KynicOS_Governance\scripts\kynicos_readme_auditor.py --root C:\Users\QUINTANA\Downloads
```

## Execute (Python, force overwrite manual readmes)
```bat
cd /d C:\Users\QUINTANA\Downloads
python _KynicOS_Governance\scripts\kynicos_readme_auditor.py --root C:\Users\QUINTANA\Downloads --force-manual
```

## Reports
- JSON: `_KynicOS_Governance/reports/readme_audit_report.json`
- Markdown: `_KynicOS_Governance/reports/readme_audit_report.md`

## Current Status
This run has already standardized directory readmes under Downloads.
