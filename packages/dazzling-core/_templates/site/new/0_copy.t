---
sh: "cd '<%= actionfolder + '/contents' %>' && tar cf - --exclude=node_modules . | (cd <%= cwd %> && tar xvf - )"
---
