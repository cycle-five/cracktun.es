# 🐍 Python Development Environment Architecture

## Layer 1: System Level (CachyOS/Arch)
```
┌─────────────────────────────────────────┐
│  📦 System Python (/usr/bin/python)     │
│  🔧 python-pip                          │
│                                         │
│  ⚠️  Only for system tools and          │
│     bootstrapping. Don't install        │
│     packages here!                      │
└─────────────────────────────────────────┘
```

## ↓

## Layer 2: Python Version Management (pyenv)
```
┌─────────────────────────────────────────┐
│  🐍 Python 3.12.11                      │
│  🐍 Python 3.11.9                       │
│  🐍 Python 3.10.x                       │
│  🐍 Python 3.13.x                       │
│                                         │
│  📁 Located: ~/.pyenv/versions/         │
│  🔄 Switch: pyenv global/local/shell    │
└─────────────────────────────────────────┘
```

## ↓ branches to ↓

<table>
<tr>
<td width="50%">

### Global CLI Tools (pipx)
```
┌──────────────────────────┐
│  📊 ipython              │
│  🎨 black                │
│  ⚡ ruff                 │
│  📓 jupyter              │
│  🚀 uv                   │
│                          │
│  Each tool in its own    │
│  isolated venv           │
│                          │
│  📁 ~/.local/pipx/venvs/ │
│                          │
│  ✅ No dependency        │
│     conflicts!           │
└──────────────────────────┘
```

</td>
<td width="50%">

### Project Environments
```
┌──────────────────────────┐
│  Option A: uv            │
│  ─────────────────────   │
│  📁 project1/.venv       │
│  📁 project2/.venv       │
│                          │
│  Option B: pip + venv    │
│  ─────────────────────   │
│  📁 project3/venv        │
│                          │
│  Project-specific        │
│  dependencies,           │
│  fully isolated          │
└──────────────────────────┘
```

</td>
</tr>
</table>

---

## 🔑 Key Concepts

- **System Python**: Bootstrap only, leave untouched
- **pyenv**: Manages multiple Python versions
- **pipx**: Installs CLI tools globally, each in isolation
- **pip**: Used inside virtual environments for project deps
- **uv**: Fast alternative to pip+venv (10-100x faster)

---

## 📋 Typical Workflow

1. **Set Python version** for project:
   ```bash
   pyenv local 3.12.11
   ```

2. **Create isolated environment**:
   ```bash
   uv venv              # or: python -m venv .venv
   source .venv/bin/activate
   ```

3. **Install packages** in that environment:
   ```bash
   uv pip install pandas requests  # or: pip install ...
   ```

4. **Install global tools** (one-time):
   ```bash
   pipx install black
   pipx install ruff
   ```

---

## 🎯 The Big Picture

```
System Python (untouched)
    ↓
pyenv (manages Python versions)
    ↓
    ├─→ pipx → Tool A (isolated)
    │         → Tool B (isolated)
    │         → Tool C (isolated)
    │
    └─→ Projects → Project 1 (.venv with deps)
                 → Project 2 (.venv with deps)
                 → Project 3 (.venv with deps)
```

**Each layer is completely isolated from the others!**
![](python-env-diagram.html)