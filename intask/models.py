from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


class Task(models.Model):

    owner = models.ForeignKey(User, related_name="task_owner")

    members = models.ForeignKey(User, related_name="task_member")

    title = models.CharField(max_length=50, default="title")

    label = models.CharField(max_length=50, default="label")

    description = models.TextField(max_length=1000)

    remove = models.BooleanField(default=False)

    when = models.DateTimeField(auto_now_add=True)
