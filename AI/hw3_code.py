
# coding: utf-8

# In[7]:


import numpy as np

a = np.arange(1,101)
a = a.reshape(4, 5, 5)

print(a,a.shape , "\n")


# In[9]:


b = np.arange(101,126)
b = b.reshape(5, 5)

print(b,b.shape, "\n")


# In[17]:


r1 = a[1, 3,:]

print(r1, "\n")


# In[11]:


r2 = b[:,0:1]

print(r2 ,"\n")

